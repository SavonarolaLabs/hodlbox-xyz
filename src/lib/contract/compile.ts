import { compile } from "@fleet-sdk/compiler"
import { ErgoAddress, Network, SByte, SColl, SGroupElement, SSigmaProp } from "@fleet-sdk/core"
import { hodl } from "./hodl.js"
import { hodlErg3 } from "./hodl_hodlerg3.js"
import { first } from "@fleet-sdk/common"
import { _contractDevPK } from "./settings.js"

export const CONTRACT_HODLERG3="H3AA3QNR1XTqqPnNsjrYjsF3JAKFZATMemhZ1pp94Vgus7BK3WsuZwmqfDYNWCFGvVd3Udo1nEMt3MyKEFiCnqT4fd9FUwPhTTCbMjbL5LyuVpTRhLppi9AnHvBVhmtYMLmWeyUnspkDbHC5VzZMTaETLmA9ZsNZPjzYab5woeSwSXKk5uCa9GkJf8FYi2mAHuaXB9MohZR9B3gGZY5uP8Wsq1QDE8pxKTmurTd9tVRjsjWVF7hyTdbEkhq3Ue89WsJEi1Y5Ur9RrVjNx3MgMXCiHbi2XnATEAkdssCSxybr9pyGqF2pyfjP2daNioEtaok99ca3pUFg7egqtfAuALqgjwBPMZyDT6ewmkLSwiBbNG4F8Yvh6d7jEzBM41fXNtNKHtRbxRhrj95fQmZW9dPbsr4MyAF5HpJpgCKEjpe4YBfuCjssu5YKMc5sNjwBEo8k8xHVPEne7SwpCbLDSeyj98XgK58yt9Zcm1Lr9M7txoiNxHAGaNAXmcbayGTkeVPyrgAfni8daXmzHyGTcQ8zH33bfkM6asQPpj54LTWPAfHAKsK646MPJ9UUjCGoNunpQ"


export function compileHodlContract(devBase58PK: string = _contractDevPK): string {
    return compileContract(hodl, devBase58PK)
}

export function compileHodlErg3Contract(devBase58PK: string = _contractDevPK): string {
    console.log(compileContract(hodlErg3, devBase58PK))
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
compileHodlErg3Contract()