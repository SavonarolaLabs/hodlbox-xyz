import { compile } from "@fleet-sdk/compiler"
import { ErgoAddress, Network, SByte, SColl, SGroupElement, SSigmaProp } from "@fleet-sdk/core"
import { hodl } from "./hodl.js"
import { hodlErg3 } from "./hodl_hodlerg3.js"
import { hodlMeme } from "./hodl_meme.js"
import { first } from "@fleet-sdk/common"
import { DEV_CONTRACT_PK, DEV_ORACLE_PK, _contractDevPK } from "./settings.js"

export const CONTRACT_HODLERG3="H3AA3QNR1XTqqPnNsjrYjsF3JAKFZATMemhZ1pp94Vgus7BK3WsuZwmqfDYNWCFGvVd3Udo1nEMt3MyKEFiCnqT4fd9FUwPhTTCbMjbL5LyuVpTRhLppi9AnHvBVhmtYMLmWeyUnspkDbHC5VzZMTaETLmA9ZsNZPjzYab5woeSwSXKk5uCa9GkJf8FYi2mAHuaXB9MohZR9B3gGZY5uP8Wsq1QDE8pxKTmurTd9tVRjsjWVF7hyTdbEkhq3Ue89WsJEi1Y5Ur9RrVjNx3MgMXCiHbi2XnATEAkdssCSxybr9pyGqF2pyfjP2daNioEtaok99ca3pUFg7egqtfAuALqgjwBPMZyDT6ewmkLSwiBbNG4F8Yvh6d7jEzBM41fXNtNKHtRbxRhrj95fQmZW9dPbsr4MyAF5HpJpgCKEjpe4YBfuCjssu5YKMc5sNjwBEo8k8xHVPEne7SwpCbLDSeyj98XgK58yt9Zcm1Lr9M7txoiNxHAGaNAXmcbayGTkeVPyrgAfni8daXmzHyGTcQ8zH33bfkM6asQPpj54LTWPAfHAKsK646MPJ9UUjCGoNunpQ"
export const CONTRACT_HODL="2GA8D6BRAQBFM43ToK7rVxKuEanxNv9r5fy85kP5yZdsefddeVsNPv3eKY1MUek9YizEuo6oMpJTD6GxXQ26wpgikiJgdpTLKc7LB9KvcSEjhBYSmsnSkkthRPWJR5obRVqYZRcVtmbRM4k3EXymDAkctymB9VonNmoMvQXS3HzENceRdD7SJg72sYWCakgKk2rj595Dgjm5UM3jKFGK9FrGhrbW6BA2CsKe617Zp4KfUv2tirBqxSYuSbpnMJC3hrjHRpciZMgxc23BQp37hcEmYgorJQbDSYcCwsqp4vCdhc2Y7X3G7DvPHGzg43rzGJirKnAyDZRuWGm6LMtAFAWYtqaLyCkahmXuYftbQPT7x4AvXJgay2wyY5CJHBDXvEFJqRTuQ51mnZSBkmEPaqXec2uLpp9P45kQFW9b763jVmXDTou5fcNQUqKAL4yvg8bbZZebrfMQJdi8kFAM19rWmkDcsQWtc26vyNjaNnndShhA8LQosfisBQepD9wzftKA6co4PxtJvDr"
export const CONTRACT_MEME="CBRSTJPM6QU8p2wWUPJJbcwRPf2aCCG1X5sjwKegjLN8KQ5dMtmuYpyy2rPHKkZ81TknNeti6NyurtzFoYRxtN5BZUhFiPTEjkz5gMcK5DQjMPWPTMJ2jrqqA1kvutCWcy6HHw7UG8i5Jjks1wXZYVvr3dXBpB1Y2TT6dQXhVBFnUHms7zqn3xNDitkTbsidBWjo7gDzk2J3NXKbfcbhRRu9wsMkoBgArx6omGkMxkcsKjJFfSwC6Fr9PvLgs291VApEw9VKrbpQ8Hs2QEYzH84guekzvr7Ec5h1Jof9Vr5CdJH3SAcodvjRcrnF7b9sfR7X1k2VdeWCvL9ve8Fp41h75hHDqoVQQZk51kgiRJowRJto5eZBurxbTExCZAjp1WdFTxX5CtVL8MbCieJ3GoL4us6WbCVxUdPQVYt3W8DERDgnSyNaYnBSJk1LDvMirBTATRw9cLvxYTTKNy9bg8PfjN7ajyDtCrXgZo6ZigT3mUTLGRH9gD2E2UZYUd7EspEGkhV5Y"

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

function compileMemeContract(contract: string, devBase58PK: string, oracleBase58PK: string): string {
    const devAddr = ErgoAddress.fromBase58(devBase58PK)
    const oraclePK = ErgoAddress.fromBase58(oracleBase58PK)
    const tree = compile(contract, {
        map: {
            _contractDevPK: SSigmaProp(SGroupElement(first(devAddr.getPublicKeys()))).toHex(),
            //_customOraclePK: SSigmaProp(SGroupElement(first(oraclePK.getPublicKeys()))).toHex()
        }
    });
    return tree.toAddress(Network.Mainnet).toString()
}
console.log(
compileMemeContract(hodlMeme, DEV_CONTRACT_PK, DEV_ORACLE_PK));