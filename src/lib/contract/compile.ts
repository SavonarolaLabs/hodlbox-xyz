import { compile } from "@fleet-sdk/compiler"
import { ErgoAddress, Network, SByte, SColl, SGroupElement, SSigmaProp } from "@fleet-sdk/core"
import { hodl } from "./hodl.js"
import { hodlErg3 } from "./hodl_hodlerg3.js"
import { hodlMeme } from "./hodl_meme.js"
import { first } from "@fleet-sdk/common"
import { DEV_CONTRACT_PK, DEV_ORACLE_PK, _contractDevPK } from "./settings.js"

export const CONTRACT_HODLERG3="H3AA3QNR1XTqqPnNsjrYjsF3JAKFZATMemhZ1pp94Vgus7BK3WsuZwmqfDYNWCFGvVd3Udo1nEMt3MyKEFiCnqT4fd9FUwPhTTCbMjbL5LyuVpTRhLppi9AnHvBVhmtYMLmWeyUnspkDbHC5VzZMTaETLmA9ZsNZPjzYab5woeSwSXKk5uCa9GkJf8FYi2mAHuaXB9MohZR9B3gGZY5uP8Wsq1QDE8pxKTmurTd9tVRjsjWVF7hyTdbEkhq3Ue89WsJEi1Y5Ur9RrVjNx3MgMXCiHbi2XnATEAkdssCSxybr9pyGqF2pyfjP2daNioEtaok99ca3pUFg7egqtfAuALqgjwBPMZyDT6ewmkLSwiBbNG4F8Yvh6d7jEzBM41fXNtNKHtRbxRhrj95fQmZW9dPbsr4MyAF5HpJpgCKEjpe4YBfuCjssu5YKMc5sNjwBEo8k8xHVPEne7SwpCbLDSeyj98XgK58yt9Zcm1Lr9M7txoiNxHAGaNAXmcbayGTkeVPyrgAfni8daXmzHyGTcQ8zH33bfkM6asQPpj54LTWPAfHAKsK646MPJ9UUjCGoNunpQ"
export const CONTRACT_HODL="2GA8D6BRAQBFM43ToK7rVxKuEanxNv9r5fy85kP5yZdsefddeVsNPv3eKY1MUek9YizEuo6oMpJTD6GxXQ26wpgikiJgdpTLKc7LB9KvcSEjhBYSmsnSkkthRPWJR5obRVqYZRcVtmbRM4k3EXymDAkctymB9VonNmoMvQXS3HzENceRdD7SJg72sYWCakgKk2rj595Dgjm5UM3jKFGK9FrGhrbW6BA2CsKe617Zp4KfUv2tirBqxSYuSbpnMJC3hrjHRpciZMgxc23BQp37hcEmYgorJQbDSYcCwsqp4vCdhc2Y7X3G7DvPHGzg43rzGJirKnAyDZRuWGm6LMtAFAWYtqaLyCkahmXuYftbQPT7x4AvXJgay2wyY5CJHBDXvEFJqRTuQ51mnZSBkmEPaqXec2uLpp9P45kQFW9b763jVmXDTou5fcNQUqKAL4yvg8bbZZebrfMQJdi8kFAM19rWmkDcsQWtc26vyNjaNnndShhA8LQosfisBQepD9wzftKA6co4PxtJvDr"
export const CONTRACT_MEME="EPNcS4jaJCEFiEMXmJ6sM8N9G2AroqksWu8QuDPu9AFn1i4Y8wz5U3rteFb6MD8xhp33KNyGhma6Mvf27bsZinirqw6xgrg5r7UesFqBdeqGamZJvVeRzdpMUWEz8BrKq5bibc5xY2Hq9FxvaAnRoFDpxuA7SZbxr9mXmP244XqVpAWFFd5KgoHFGz7wUd3eT3Qkahy6oyfNpc1MWRh2Uq89NVRiyEXBVLMqQXevv2sG5c4WBtKGhVwProUngj2cGZ8utb5xEhmkr6tuV55njs5MsPvieGA4roH3Sn1WLobJzbeaAan94SRo4zWbZ92csHHwEHy95ZNwA273yC6j4Uj3kHfqPzAzQBfkHLruJV79AL8Rveg4biy1UBz7ZdYrbtSiW1HMGHQF1KQSdzTBc9LLF1qNTxzPyZXXnbpeqRtrrhEAwbWabfJ1NbQ7ENiirki4ACGSYMA6DYgqRe9qJoZte96qMchg2PL9cVUx2GWNR7YtAssULiZjyybfMQsCtAihK8Bc7AyKsmHFreEa5ds44tYRzfvgDnjqESe"

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