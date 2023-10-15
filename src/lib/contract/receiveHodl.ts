import { ErgoAddress, OutputBuilder, RECOMMENDED_MIN_FEE_VALUE, SAFE_MIN_BOX_VALUE, SByte, SColl, TransactionBuilder } from "@fleet-sdk/core";
import { getOracleBox } from "./getOracleBox.js";
import { DEV_CONTRACT_PK, DEV_UI_PK } from "./settings.js";

export async function receiveHodlBoxTx(hodlBox: object, holderBase58PK: string, utxos: Array<any>, height: number, devFeeBase58PK: string = DEV_CONTRACT_PK,  uiFeeBase58PK: string = DEV_UI_PK): any {

    const myAddr = ErgoAddress.fromBase58(holderBase58PK)

    const oracleBox = await getOracleBox()

    const value = BigInt(hodlBox.value)
    let devFeeAmount = value / 200n
    let uiFeeAmount = value / 200n
    let userAmount = value - devFeeAmount - uiFeeAmount

    const hodlerBox = new OutputBuilder(
        userAmount,
        myAddr
    ).addTokens(hodlBox.assets)
    .setAdditionalRegisters({
        R4: SColl(SByte, buyBox.boxId).toHex(),
    });

    const devFeeBox = new OutputBuilder(
        SAFE_MIN_BOX_VALUE > devFeeAmount ? SAFE_MIN_BOX_VALUE : devFeeAmount,
        devFeeBase58PK
    )
    const uiFeeBox = new OutputBuilder(
        SAFE_MIN_BOX_VALUE > uiFeeAmount ? SAFE_MIN_BOX_VALUE : uiFeeAmount,
        uiFeeBase58PK
    )

    const outputBoxes = [hodlerBox, devFeeAmount > 0n ? devFeeBox : undefined, uiFeeAmount > 0n ? uiFeeBox : undefined].filter(x => x)

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