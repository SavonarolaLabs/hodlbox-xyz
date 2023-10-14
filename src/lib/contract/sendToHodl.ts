import { first } from "@fleet-sdk/common";
import { ErgoAddress, ErgoUnsignedInput, OutputBuilder, RECOMMENDED_MIN_FEE_VALUE, SAFE_MIN_BOX_VALUE, TransactionBuilder } from "@fleet-sdk/core";
import {  SGroupElement, SInt, SLong, SSigmaProp } from "@fleet-sdk/serializer";
import { eip0004Regs, type eip004Regs } from "./eip004utils.js"

export async function mintHodlBoxTx(holderBase58PK: string,utxos:Array<any>, height: number,contractBase58PK:string,ergoAmount:bigint,uiBase58PK:string): any{
    const myAddr = ErgoAddress.fromBase58(holderBase58PK)
    const uiAddr = ErgoAddress.fromBase58(uiBase58PK) 
    
    //:TODO: f(chest) + f(price <-> rate)
    const targetHeight = 1101525
    const targetPrice = 600000000n
    const targetRate = 10n**18n/targetPrice

    //:TODO: f(chest)
    const tokenRegs: eip004Regs = {
        name: "$6000 Holdbox",
        description: `price: $0.95, date: 2023-09-29`,
        sha256: "9ae358259b5e7f0c109f94c5779148d3690bc0968b8b1591d0048513",
        url: "here IPFS LINK to image",
    };

    const contractBox = new OutputBuilder(
        ergoAmount,
        contractBase58PK
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
        name: "$6000 Holdbox", //:TODO: f(chest)
    }).setAdditionalRegisters(eip0004Regs(tokenRegs));


    const unsignedMintTransaction = new TransactionBuilder(height)
        .from([...utxos])
        .to([contractBox,nftBox])
        .sendChangeTo(myAddr)
        .payFee(RECOMMENDED_MIN_FEE_VALUE)
        .build()
        .toEIP12Object();
        
    return unsignedMintTransaction

}