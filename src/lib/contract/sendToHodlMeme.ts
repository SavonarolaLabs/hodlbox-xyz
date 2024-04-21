import { first } from "@fleet-sdk/common";
import {
    ErgoAddress,
    OutputBuilder,
    RECOMMENDED_MIN_FEE_VALUE,
    SAFE_MIN_BOX_VALUE,
    TransactionBuilder
} from "@fleet-sdk/core";
import { SGroupElement, SInt, SLong, SSigmaProp } from "@fleet-sdk/serializer";
import { eip0004Regs, type eip004Regs } from "./eip004utils.js";

export async function sendToHodlMemeTx(
    holderBase58PK: string,
    utxos: Array<any>,
    height: number,
    contractBase58PK: string,
    assets: any,
    uiBase58PK: string,
    targetRateInNanoErg: bigint,
    targetHeight: number,
    targetDate: string,
    oracleBase58PK: string
): any {
    const myAddr = ErgoAddress.fromBase58(holderBase58PK);
    const uiAddr = ErgoAddress.fromBase58(uiBase58PK);
    const oracleAddress = ErgoAddress.fromBase58(oracleBase58PK);

    targetHeight = height + 2;
    const tokenRegs: eip004Regs = {
        name: "5,000.00 ERG Holdbox",
        description: `price: ${
            targetRateInNanoErg / 10n ** 9n
        } ERG, heigth:${targetHeight}, date: ${targetDate},`,
        sha256: "4142a557cf9905610c69a6defa14be6d09495090e8f65db9aeda3a0dd236f009",
        url: "https://i.ibb.co/FzXdR2Y/5000erg-original-min.png"
    };

    const contractBox = new OutputBuilder(SAFE_MIN_BOX_VALUE, contractBase58PK)
        .addTokens(assets)
        .setAdditionalRegisters({
            R4: SLong(targetRateInNanoErg).toHex(), //665778961n
            R5: SInt(targetHeight).toHex(), // 1101505
            R6: SSigmaProp(SGroupElement(first(myAddr.getPublicKeys()))).toHex(),
            R7: SSigmaProp(SGroupElement(first(uiAddr.getPublicKeys()))).toHex(),
            R8: SSigmaProp(SGroupElement(first(oracleAddress.getPublicKeys()))).toHex()
        });

    const nftBox = new OutputBuilder(SAFE_MIN_BOX_VALUE, holderBase58PK)
        .mintToken({
            amount: "1",
            name: "5,000.00 ERG Holdbox"
        })
        .setAdditionalRegisters(eip0004Regs(tokenRegs));

    const unsignedMintTransaction = new TransactionBuilder(height)
        .from([...utxos])
        .to([contractBox, nftBox])
        .sendChangeTo(myAddr)
        .payFee(RECOMMENDED_MIN_FEE_VALUE * 2n)
        .build()
        .toEIP12Object();

    return unsignedMintTransaction;
}
