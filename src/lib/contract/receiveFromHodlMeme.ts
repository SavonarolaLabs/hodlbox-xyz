// import centralizedOracleSigningKey
import { first } from "@fleet-sdk/common";
import {
    ErgoAddress,
    ErgoUnsignedInput,
    OutputBuilder,
    RECOMMENDED_MIN_FEE_VALUE,
    SAFE_MIN_BOX_VALUE,
    TransactionBuilder
} from "@fleet-sdk/core";
import { SByte, SColl, SGroupElement, SInt, SLong, SSigmaProp } from "@fleet-sdk/serializer";

export async function receiveHodlMemeTx(
    buyBox: object,
    oracleBase58PK: string,
    utxos: Array<any>,
    height: number,
    uiBase58PK: string,
    devBase58PK: string,
    holderBase58PK: string
): any {
    const oracleAddress = ErgoAddress.fromBase58(oracleBase58PK);
    const assets = JSON.parse(JSON.stringify(buyBox.assets));

    let devAssetAmount = BigInt(assets[0].amount) / 200n;
    let uiAssetAmount = BigInt(assets[0].amount) / 200n;
    let userAmount = BigInt(assets[0].amount) - devAssetAmount - uiAssetAmount;

    const devFeeAsset = { tokenId: assets[0].tokenId, amount: devAssetAmount.toString() };
    const uiFeeAsset = { tokenId: assets[0].tokenId, amount: uiAssetAmount.toString() };
    const hodlerAsset = { tokenId: assets[0].tokenId, amount: userAmount.toString() };
    assets[0] = hodlerAsset;

    const hodlerBox = new OutputBuilder(SAFE_MIN_BOX_VALUE, ErgoAddress.fromBase58(holderBase58PK))
        .addTokens(assets)
        .setAdditionalRegisters({
            R4: SColl(SByte, buyBox.boxId).toHex()
        });

    const devFeeBox = new OutputBuilder(SAFE_MIN_BOX_VALUE, devBase58PK).addTokens([devFeeAsset]);

    const uiFeeBox = new OutputBuilder(SAFE_MIN_BOX_VALUE, uiBase58PK).addTokens([uiFeeAsset]);

    const receiversBoxes = [
        hodlerBox,
        devAssetAmount > 0n ? devFeeBox : undefined,
        uiAssetAmount > 0n ? uiFeeBox : undefined
    ].filter((x) => x);

    const unsignedMintTransaction = new TransactionBuilder(height)
        .configureSelector((selector) => selector.ensureInclusion(buyBox.boxId))
        .from([buyBox, ...utxos])
        .to(receiversBoxes)
        .sendChangeTo(oracleAddress)
        .payFee(RECOMMENDED_MIN_FEE_VALUE)
        .build()
        .toEIP12Object();

    return unsignedMintTransaction;
}
