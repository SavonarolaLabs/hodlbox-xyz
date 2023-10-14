import { ErgoAddress, OutputBuilder, RECOMMENDED_MIN_FEE_VALUE, SAFE_MIN_BOX_VALUE, TransactionBuilder } from "@fleet-sdk/core";
import { getOracleBox } from "./getOracleBox.js";

export async function receiveHodlBoxTx(buyBox:object, holderBase58PK: string,utxos:Array<any>, height: number,uiBase58PK:string, devBase58PK:string): any{

    const myAddr = ErgoAddress.fromBase58(holderBase58PK)

    const oracleBox=await getOracleBox()

    const value = BigInt(buyBox.value)
    let devFeeAmount = value / 200n
    let uiFeeAmount = value / 200n
    let userAmount = value - devFeeAmount - uiFeeAmount

    const hodlerBox = new OutputBuilder(
        userAmount,
        myAddr
    ).addTokens(buyBox.assets)

    const devFeeBox = new OutputBuilder(
        SAFE_MIN_BOX_VALUE>devFeeAmount?SAFE_MIN_BOX_VALUE:devFeeAmount,
        devBase58PK
    )
    const uiFeeBox = new OutputBuilder(
        SAFE_MIN_BOX_VALUE>uiFeeAmount?SAFE_MIN_BOX_VALUE:uiFeeAmount,
        uiBase58PK
    )
    
    const receiversBoxes = [hodlerBox, devFeeAmount > 0n ? devFeeBox : undefined, uiFeeAmount > 0n ? uiFeeBox : undefined].filter(x => x)

    const unsignedMintTransaction = new TransactionBuilder(height)
        .configureSelector((selector) => selector.ensureInclusion(buyBox.boxId))
        .from([buyBox,...utxos])
        .to(receiversBoxes)
        .sendChangeTo(myAddr)
        .payFee(RECOMMENDED_MIN_FEE_VALUE)
        .build()
        .toEIP12Object();

        unsignedMintTransaction.dataInputs=[oracleBox]        

    return unsignedMintTransaction
}