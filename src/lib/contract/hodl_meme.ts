export const hodlMeme = `
{
    // _contractDevPK - public key of the contract developer
    // _spectrumOraclePK = "TBA"
    
    // val hodlTargetRate : Long        = SELF.R4[Long].get
    val maxHeight      : Int         = SELF.R5[Int].get
    val hodlerPK       : SigmaProp   = SELF.R6[SigmaProp].get
    val uiFeePK        : SigmaProp   = SELF.R7[SigmaProp].get

    val tokenId        : Coll[SByte]= SELF.tokens(0)._1
    val totalLockedAmount: Long      = SELF.tokens(0)._2

    val fees: Coll[(SigmaProp, BigInt)] = {
        val feeDenom : Long = 100000L
        val devFee   : Long = 500L         // 0.5%
        val uiFee    : Long = 500L         // 0.5%
            Coll(
                 (_contractDevPK, (devFee.toBigInt * totalLockedAmount.toBigInt) / feeDenom.toBigInt),
                 (uiFeePK, (uiFee.toBigInt * totalLockedAmount.toBigInt) / feeDenom.toBigInt)
            )
    }

    val feesPaid : Boolean = {
        val devFeesPaid: Boolean = {
            if(fees(0)._2 > 0){
                val devOutput : Box   = OUTPUTS(1)
                allOf(
                    Coll(
                        devOutput.propositionBytes   == fees(0)._1.propBytes,
                        devOutput.tokens(0)._1     == tokenId,
                        devOutput.tokens(0)._2     >= fees(0)._2      
                    )
                )
            }else{
                true
            }
        }

        val uiFeesPaid : Boolean = {
            if(fees(1)._2 > 0){
                val uiOutput : Box    = OUTPUTS(2)
                allOf(
                    Coll(
                        uiOutput.propositionBytes   == fees(1)._1.propBytes,
                        uiOutput.tokens(0)._1     == tokenId,
                        uiOutput.tokens(0)._2     >= fees(1)._2
                    )
                )
            }else{
                true
            }
        }
        devFeesPaid && uiFeesPaid
    }

    val feesTotal : Long = fees(0)._2 + fees(1)._2

    val repaymentAmount : Long = totalLockedAmount - feesTotal

    val fundsReturned : Boolean = {
        OUTPUTS(0).propositionBytes == hodlerPK.propBytes && 
        OUTPUTS(0).tokens(0)._1 == tokenId &&
        OUTPUTS(0).tokens(0)._2 >= repaymentAmount &&
        OUTPUTS(0).R4[Coll[Byte]].get     == SELF.id
    }

    val maxHeightReached : Boolean = {
        maxHeight <= HEIGHT
    }

    val priceTargetReached : SigmaProp = sigmaProp(_spectrumOraclePK)

    if(priceTargetReached || maxHeightReached){
        sigmaProp(fundsReturned && feesPaid) 
    } else {
        sigmaProp(false)
    }
}`