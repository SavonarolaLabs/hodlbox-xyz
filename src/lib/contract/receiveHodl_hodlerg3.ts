import { ErgoAddress, OutputBuilder, RECOMMENDED_MIN_FEE_VALUE, SAFE_MIN_BOX_VALUE, TransactionBuilder } from "@fleet-sdk/core";
import { SByte, SColl } from "@fleet-sdk/serializer";
import { getOracleBox } from "./getOracleBox.js";

export async function receiveHodlErg3BoxTx(hodlBox: object, holderBase58PK: string, utxos: Array<any>, height: number, devFeeBase58PK: string, uiFeeBase58PK: string): any {

    const myAddr = ErgoAddress.fromBase58(holderBase58PK)

    const oracleBox = await getOracleBox()

    const assets = JSON.parse(JSON.stringify(hodlBox.assets))
    let devAssetAmount = BigInt(assets[0].amount) / 200n
    let uiAssetAmount = BigInt(assets[0].amount) / 200n
    let userAmount = BigInt(assets[0].amount) - devAssetAmount - uiAssetAmount

    const devFeeAsset = { tokenId: assets[0].tokenId, amount: devAssetAmount.toString() }
    const uiFeeAsset = { tokenId: assets[0].tokenId, amount: uiAssetAmount.toString() }
    const hodlerAsset = { tokenId: assets[0].tokenId, amount: userAmount.toString() }
    assets[0] = hodlerAsset

    const hodlerBox = new OutputBuilder(
        SAFE_MIN_BOX_VALUE,
        myAddr
    ).addTokens(assets)
    .setAdditionalRegisters({
        R4: SColl(SByte, hodlBox.boxId).toHex(),
    });

    const devFeeBox = new OutputBuilder(
        SAFE_MIN_BOX_VALUE,
        devFeeBase58PK
    ).addTokens([devFeeAsset])

    const uiFeeBox = new OutputBuilder(
        SAFE_MIN_BOX_VALUE,
        uiFeeBase58PK
    ).addTokens([uiFeeAsset])

    const outputBoxes = [hodlerBox, devAssetAmount > 0n ? devFeeBox : undefined, uiAssetAmount > 0n ? uiFeeBox : undefined].filter(x => x)

    const unsignedMintTransaction = new TransactionBuilder(height)
        .configureSelector((selector) => selector.ensureInclusion(hodlBox.boxId))
        .from([hodlBox, ...utxos])
        .to(outputBoxes)
        .sendChangeTo(myAddr)
        .payFee(RECOMMENDED_MIN_FEE_VALUE)
        .build()
        .toEIP12Object();


    unsignedMintTransaction.dataInputs = [oracleBox]

    return unsignedMintTransaction

}