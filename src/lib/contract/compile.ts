import { compile } from "@fleet-sdk/compiler"
import { ErgoAddress, Network, SByte, SColl, SGroupElement, SSigmaProp } from "@fleet-sdk/core"
import { hodl } from "./hodl.js"
import { hodlErg3 } from "./hodl_hodlerg3.js"
import { first } from "@fleet-sdk/common"
import { _contractDevPK } from "./settings.js"

export function compileHodlContract(devBase58PK: string = _contractDevPK): string {
    return compileContract(hodl, devBase58PK)
}

export function compileHodlErg3Contract(devBase58PK: string = _contractDevPK): string {
    return compileContract(hodlErg3, devBase58PK)
}

function compileContract(contract: string, devBase58PK: string): string {
    const devAddr = ErgoAddress.fromBase58(devBase58PK)
    const tree = compile(contract, {
        map: {
            _contractDevPK: SSigmaProp(SGroupElement(first(devAddr.getPublicKeys()))).toHex(),
            _oraclePoolNFT: SColl(SByte, "011d3364de07e5a26f0c4eef0852cddb387039a921b7154ef3cab22c6eda887f").toHex()
        }
    });
    return tree.toAddress(Network.Mainnet).toString()
}