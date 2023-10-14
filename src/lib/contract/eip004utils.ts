import type { NonMandatoryRegisters } from "@fleet-sdk/common";
import { TransactionBuilder, OutputBuilder, ErgoAddress, SConstant, SColl, SByte, SInt, type SequentialNonMandatoryRegisters } from "@fleet-sdk/core";
import { stringToBytes } from "@scure/base";

export type eip004Regs = {
    name: string
    description: string
    sha256: string
    url: string
}

export function eip0004Regs(o: eip004Regs): NonMandatoryRegisters{
    return eip0004ArtworkRegisters(o.name, o.description, o.sha256, o.url)
}

export function eip0004ArtworkRegisters(name:string, description:string, sha256:string, url:string): NonMandatoryRegisters{
    return {
        R4: SConstant(SColl(SByte, stringToBytes("utf8", name))),
        R5: SConstant(SColl(SByte, stringToBytes("utf8", description))),
        R6: SConstant(SColl(SByte, stringToBytes("utf8", "0"))),
        R7: "0e020101",
        R8: SConstant(SColl(SByte, stringToBytes("hex", sha256))),
        R9: SConstant(SColl(SByte, stringToBytes("utf8", url)))
    }
}