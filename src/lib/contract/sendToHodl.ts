import { first } from "@fleet-sdk/common";
import { ErgoAddress, OutputBuilder, RECOMMENDED_MIN_FEE_VALUE, SAFE_MIN_BOX_VALUE, TransactionBuilder } from "@fleet-sdk/core";
import { SGroupElement, SInt, SLong, SSigmaProp } from "@fleet-sdk/serializer";
import { eip0004Regs, type eip004Regs } from "./eip004utils.js"
import type { Treasure } from "$lib/store/store.js";
import { getOracleBox } from "./getOracleBox.js";
import { CONTRACT_HODL } from "./compile.js";

export async function mintHodlBoxTx(holderBase58PK: string, utxos: Array<any>, height: number, treasure:Treasure, uiFeeBase58PK: string, targetPrice: bigint): any {
    const myAddr = ErgoAddress.fromBase58(holderBase58PK)
    const uiAddr = ErgoAddress.fromBase58(uiFeeBase58PK)

    const targetHeight = 1_372_200 // 2024-10-15  
    const targetRate = 10n ** 18n / targetPrice

    const mintDate = new Date().toISOString().split("T")[0]
    const ergoAmount = BigInt(treasure.price*10**9)

    const oracleBox = await getOracleBox()
    const currentRate = oracleBox.additionalRegisters.R4.renderedValue
    const currentPrice = (1/currentRate*10**9).toFixed(2)

    const tokenRegs: eip004Regs = {
        name: treasure.name,
        description: `Erg price: $${currentPrice}, date: ${mintDate}, unlock: 2024-10-15`,
        sha256: treasure.sha256,
        url: `ipfs://${treasure.cid}`,
    };

    const contractBox = new OutputBuilder(
        ergoAmount,
        CONTRACT_HODL  
    ).setAdditionalRegisters({
        R4: SLong(targetRate).toHex(),
        R5: SInt(targetHeight).toHex(),
        R6: SSigmaProp(SGroupElement(first(myAddr.getPublicKeys()))).toHex(),
        R7: SSigmaProp(SGroupElement(first(uiAddr.getPublicKeys()))).toHex(),
    });

    const nftBox = new OutputBuilder(
        SAFE_MIN_BOX_VALUE,
        holderBase58PK
    ).mintToken({
        amount: "1",
        name: treasure.name, 
    }).setAdditionalRegisters(eip0004Regs(tokenRegs));


    const unsignedMintTransaction = new TransactionBuilder(height)
        .from([...utxos])
        .to([contractBox, nftBox])
        .sendChangeTo(myAddr)
        .payFee(RECOMMENDED_MIN_FEE_VALUE)
        .build()
        .toEIP12Object();

    return unsignedMintTransaction

}