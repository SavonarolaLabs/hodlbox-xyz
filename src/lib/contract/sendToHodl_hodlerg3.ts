import { first } from "@fleet-sdk/common";
import { ErgoAddress, OutputBuilder, RECOMMENDED_MIN_FEE_VALUE, SAFE_MIN_BOX_VALUE, TransactionBuilder } from "@fleet-sdk/core";
import { SGroupElement, SInt, SLong, SSigmaProp } from "@fleet-sdk/serializer";
import { eip0004Regs, type eip004Regs } from "./eip004utils.js"
import { DEV_CONTRACT_PK, DEV_UI_PK } from "./settings.js";

export async function mintHodlErg3BoxTx(holderBase58PK: string, utxos: Array<any>, height: number, assets: any, devFeeBase58PK: string = DEV_CONTRACT_PK,  uiFeeBase58PK: string = DEV_UI_PK): any {

    const myAddr = ErgoAddress.fromBase58(holderBase58PK)
    const uiAddr = ErgoAddress.fromBase58(uiFeeBase58PK)

    const targetHeight = 1112415
    const targetPrice = 1502000000n
    const targetRate = 10n ** 18n / targetPrice

    const tokenRegs: eip004Regs = {
        name: "$6000 Holdbox",
        description: `price: ${targetPrice * 10n ** 9n}, heigth:${targetHeight}, date: 2023-09-29,`,
        sha256: "9ae358259b5e7f0c109f94c5779148d3690bc0968b8b1591d0048513",
        url: "here IPFS LINK to image",
    };

    const contractBox = new OutputBuilder(
        SAFE_MIN_BOX_VALUE,
        devFeeBase58PK
    )
        .addTokens(assets)
        .setAdditionalRegisters({
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
        .to([contractBox, nftBox])
        .sendChangeTo(myAddr)
        .payFee(RECOMMENDED_MIN_FEE_VALUE * 2n)
        .build()
        .toEIP12Object();

    return unsignedMintTransaction

}