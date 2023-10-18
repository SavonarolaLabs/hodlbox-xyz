<pre class="scala" style="font-family:monospace; background:white; color: black; width:100%; padding-top:1em; padding-bottom:1em;"><ol><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span
					style="color: #F78811;">&#123;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">val</span
				> hodlTargetRate <span style="color: #000080;">:</span> Long     <span
					style="color: #000080;">=</span
				> SELF.<span style="color: #000000;">R4</span><span style="color: #F78811;">&#91;</span
				>Long<span style="color: #F78811;">&#93;</span>.<span style="color: #000000;">get</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">val</span
				> maxHeight <span style="color: #000080;">:</span> Int           <span
					style="color: #000080;">=</span
				> SELF.<span style="color: #000000;">R5</span><span style="color: #F78811;">&#91;</span
				>Int<span style="color: #F78811;">&#93;</span>.<span style="color: #000000;">get</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">val</span
				> hodlerPK <span style="color: #000080;">:</span> SigmaProp      <span
					style="color: #000080;">=</span
				> SELF.<span style="color: #000000;">R6</span><span style="color: #F78811;">&#91;</span
				>SigmaProp<span style="color: #F78811;">&#93;</span>.<span style="color: #000000;">get</span
				></div></li><li style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">val</span
				> uiFeePK <span style="color: #000080;">:</span> SigmaProp       <span
					style="color: #000080;">=</span
				> SELF.<span style="color: #000000;">R7</span><span style="color: #F78811;">&#91;</span
				>SigmaProp<span style="color: #F78811;">&#93;</span>.<span style="color: #000000;">get</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">val</span
				> totalLockedNanoErg <span style="color: #000080;">:</span> Long <span
					style="color: #000080;">=</span
				> SELF.<span style="color: #000000;">value</span></div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">val</span
				> fees<span style="color: #000080;">:</span> Coll<span style="color: #F78811;">&#91;</span
				><span style="color: #F78811;">&#40;</span>SigmaProp, BigInt<span style="color: #F78811;"
					>&#41;</span
				><span style="color: #F78811;">&#93;</span> <span style="color: #000080;">=</span> <span
					style="color: #F78811;">&#123;</span
				></div></li><li style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span
					style="color: #0000ff; font-weight: bold;">val</span
				> feeDenom <span style="color: #000080;">:</span> Long <span style="color: #000080;">=</span
				> 100000L</div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span
					style="color: #0000ff; font-weight: bold;">val</span
				> devFee   <span style="color: #000080;">:</span> Long <span style="color: #000080;">=</span
				> 500L         <span style="color: #008000; font-style: italic;">// 0.5%</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span
					style="color: #0000ff; font-weight: bold;">val</span
				> uiFee    <span style="color: #000080;">:</span> Long <span style="color: #000080;">=</span
				> 500L         <span style="color: #008000; font-style: italic;">// 0.5%</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            Coll<span
					style="color: #F78811;">&#40;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                 <span
					style="color: #F78811;">&#40;</span
				><span style="color: #000080;">_</span>contractDevPK, <span style="color: #F78811;"
					>&#40;</span
				>devFee.<span style="color: #000000;">toBigInt</span> <span style="color: #000080;">*</span
				> totalLockedNanoErg.<span style="color: #000000;">toBigInt</span><span
					style="color: #F78811;">&#41;</span
				> / feeDenom.<span style="color: #000000;">toBigInt</span><span style="color: #F78811;"
					>&#41;</span
				>,</div></li><li style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                 <span
					style="color: #F78811;">&#40;</span
				>uiFeePK, <span style="color: #F78811;">&#40;</span>uiFee.<span style="color: #000000;"
					>toBigInt</span
				> <span style="color: #000080;">*</span> totalLockedNanoErg.<span style="color: #000000;"
					>toBigInt</span
				><span style="color: #F78811;">&#41;</span> / feeDenom.<span style="color: #000000;"
					>toBigInt</span
				><span style="color: #F78811;">&#41;</span></div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #F78811;">&#41;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #F78811;">&#125;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">val</span
				> feesPaid <span style="color: #000080;">:</span> Boolean <span style="color: #000080;"
					>=</span
				> <span style="color: #F78811;">&#123;</span></div></li><li
			style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span
					style="color: #0000ff; font-weight: bold;">val</span
				> devFeesPaid<span style="color: #000080;">:</span> Boolean <span style="color: #000080;"
					>=</span
				> <span style="color: #F78811;">&#123;</span></div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #0000ff; font-weight: bold;">if</span
				><span style="color: #F78811;">&#40;</span>fees<span style="color: #F78811;">&#40;</span
				><span style="color: #F78811;">0</span><span style="color: #F78811;">&#41;</span>.<span
					style="color: #000080;">_</span
				>2 <span style="color: #000080;">&gt;</span> <span style="color: #F78811;">0</span><span
					style="color: #F78811;">&#41;</span
				><span style="color: #F78811;">&#123;</span></div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                <span
					style="color: #0000ff; font-weight: bold;">val</span
				> devOutput <span style="color: #000080;">:</span> Box   <span style="color: #000080;"
					>=</span
				> OUTPUTS<span style="color: #F78811;">&#40;</span><span style="color: #F78811;">1</span
				><span style="color: #F78811;">&#41;</span></div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                allOf<span
					style="color: #F78811;">&#40;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                    Coll<span
					style="color: #F78811;">&#40;</span
				></div></li><li style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                        devOutput.<span
					style="color: #000000;">propositionBytes</span
				>   <span style="color: #000080;">==</span> fees<span style="color: #F78811;">&#40;</span
				><span style="color: #F78811;">0</span><span style="color: #F78811;">&#41;</span>.<span
					style="color: #000080;">_</span
				>1.<span style="color: #000000;">propBytes</span>,</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                        devOutput.<span
					style="color: #000000;">value</span
				>.<span style="color: #000000;">toBigInt</span>     <span style="color: #000080;"
					>&gt;=</span
				> fees<span style="color: #F78811;">&#40;</span><span style="color: #F78811;">0</span><span
					style="color: #F78811;">&#41;</span
				>.<span style="color: #000080;">_</span>2</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                    <span
					style="color: #F78811;">&#41;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                <span
					style="color: #F78811;">&#41;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #F78811;">&#125;</span
				><span style="color: #0000ff; font-weight: bold;">else</span><span style="color: #F78811;"
					>&#123;</span
				></div></li><li style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                <span
					style="color: #0000ff; font-weight: bold;">true</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #F78811;">&#125;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span
					style="color: #F78811;">&#125;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span
					style="color: #0000ff; font-weight: bold;">val</span
				> uiFeesPaid <span style="color: #000080;">:</span> Boolean <span style="color: #000080;"
					>=</span
				> <span style="color: #F78811;">&#123;</span></div></li><li
			style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #0000ff; font-weight: bold;">if</span
				><span style="color: #F78811;">&#40;</span>fees<span style="color: #F78811;">&#40;</span
				><span style="color: #F78811;">1</span><span style="color: #F78811;">&#41;</span>.<span
					style="color: #000080;">_</span
				>2 <span style="color: #000080;">&gt;</span> <span style="color: #F78811;">0</span><span
					style="color: #F78811;">&#41;</span
				><span style="color: #F78811;">&#123;</span></div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                <span
					style="color: #0000ff; font-weight: bold;">val</span
				> uiOutput <span style="color: #000080;">:</span> Box    <span style="color: #000080;"
					>=</span
				> OUTPUTS<span style="color: #F78811;">&#40;</span><span style="color: #F78811;">2</span
				><span style="color: #F78811;">&#41;</span></div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                allOf<span
					style="color: #F78811;">&#40;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                    Coll<span
					style="color: #F78811;">&#40;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                        uiOutput.<span
					style="color: #000000;">propositionBytes</span
				>   <span style="color: #000080;">==</span> fees<span style="color: #F78811;">&#40;</span
				><span style="color: #F78811;">1</span><span style="color: #F78811;">&#41;</span>.<span
					style="color: #000080;">_</span
				>1.<span style="color: #000000;">propBytes</span>,</div></li><li
			style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                        uiOutput.<span
					style="color: #000000;">value</span
				>.<span style="color: #000000;">toBigInt</span>     <span style="color: #000080;"
					>&gt;=</span
				> fees<span style="color: #F78811;">&#40;</span><span style="color: #F78811;">1</span><span
					style="color: #F78811;">&#41;</span
				>.<span style="color: #000080;">_</span>2</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                    <span
					style="color: #F78811;">&#41;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                <span
					style="color: #F78811;">&#41;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #F78811;">&#125;</span
				><span style="color: #0000ff; font-weight: bold;">else</span><span style="color: #F78811;"
					>&#123;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">                <span
					style="color: #0000ff; font-weight: bold;">true</span
				></div></li><li style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #F78811;">&#125;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span
					style="color: #F78811;">&#125;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        devFeesPaid <span
					style="color: #000080;">&amp;&amp;</span
				> uiFeesPaid</div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #F78811;">&#125;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">val</span
				> feesTotal <span style="color: #000080;">:</span> Long <span style="color: #000080;"
					>=</span
				> fees<span style="color: #F78811;">&#40;</span><span style="color: #F78811;">0</span><span
					style="color: #F78811;">&#41;</span
				>.<span style="color: #000080;">_</span>2 + fees<span style="color: #F78811;">&#40;</span
				><span style="color: #F78811;">1</span><span style="color: #F78811;">&#41;</span>.<span
					style="color: #000080;">_</span
				>2</div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">val</span
				> repaymentNanoErg <span style="color: #000080;">:</span> Long <span style="color: #000080;"
					>=</span
				> totalLockedNanoErg - feesTotal</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">val</span
				> fundsReturned <span style="color: #000080;">:</span> Boolean <span style="color: #000080;"
					>=</span
				> <span style="color: #F78811;">&#123;</span></div></li><li
			style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        OUTPUTS<span
					style="color: #F78811;">&#40;</span
				><span style="color: #F78811;">0</span><span style="color: #F78811;">&#41;</span>.<span
					style="color: #000000;">propositionBytes</span
				> <span style="color: #000080;">==</span> hodlerPK.<span style="color: #000000;"
					>propBytes</span
				> <span style="color: #000080;">&amp;&amp;</span> </div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        OUTPUTS<span
					style="color: #F78811;">&#40;</span
				><span style="color: #F78811;">0</span><span style="color: #F78811;">&#41;</span>.<span
					style="color: #000000;">value</span
				> <span style="color: #000080;">&gt;=</span> repaymentNanoErg <span style="color: #000080;"
					>&amp;&amp;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        OUTPUTS<span
					style="color: #F78811;">&#40;</span
				><span style="color: #F78811;">0</span><span style="color: #F78811;">&#41;</span>.<span
					style="color: #000000;">R4</span
				><span style="color: #F78811;">&#91;</span>Coll<span style="color: #F78811;">&#91;</span
				>Byte<span style="color: #F78811;">&#93;</span><span style="color: #F78811;">&#93;</span
				>.<span style="color: #000000;">get</span> <span style="color: #000080;">==</span
				> SELF.<span style="color: #000000;">id</span></div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #F78811;">&#125;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">val</span
				> maxHeightReached <span style="color: #000080;">:</span> Boolean <span
					style="color: #000080;">=</span
				> <span style="color: #F78811;">&#123;</span></div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        maxHeight <span
					style="color: #000080;">&lt;=</span
				> HEIGHT</div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #F78811;">&#125;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">val</span
				> priceTargetReached <span style="color: #000080;">:</span> Boolean <span
					style="color: #000080;">=</span
				> <span style="color: #F78811;">&#123;</span></div></li><li
			style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span
					style="color: #0000ff; font-weight: bold;">if</span
				> <span style="color: #F78811;">&#40;</span>CONTEXT.<span style="color: #000000;"
					>dataInputs</span
				>.<span style="color: #000000;">size</span> <span style="color: #000080;">&gt;</span> <span
					style="color: #F78811;">0</span
				><span style="color: #F78811;">&#41;</span> <span style="color: #F78811;">&#123;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #008000; font-style: italic;">// validate Oracle box</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #0000ff; font-weight: bold;">val</span
				> oracleBox <span style="color: #000080;">:</span> Box <span style="color: #000080;">=</span
				> CONTEXT.<span style="color: #000000;">dataInputs</span><span style="color: #F78811;"
					>&#40;</span
				><span style="color: #F78811;">0</span><span style="color: #F78811;">&#41;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #0000ff; font-weight: bold;">val</span
				> currentRate <span style="color: #000080;">:</span> Long <span style="color: #000080;"
					>=</span
				> oracleBox.<span style="color: #000000;">R4</span><span style="color: #F78811;">&#91;</span
				>Long<span style="color: #F78811;">&#93;</span>.<span style="color: #000000;">get</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #0000ff; font-weight: bold;">val</span
				> oracleHeight<span style="color: #000080;">:</span> Long <span style="color: #000080;"
					>=</span
				> oracleBox.<span style="color: #000000;">R5</span><span style="color: #F78811;">&#91;</span
				>Int<span style="color: #F78811;">&#93;</span>.<span style="color: #000000;">get</span
				></div></li><li style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #0000ff; font-weight: bold;">val</span
				> validDataInput<span style="color: #000080;">:</span> Boolean <span style="color: #000080;"
					>=</span
				> HEIGHT <span style="color: #000080;">&lt;=</span> oracleHeight + <span
					style="color: #F78811;">30</span
				> <span style="color: #000080;">&amp;&amp;</span> oracleBox.<span style="color: #000000;"
					>tokens</span
				><span style="color: #F78811;">&#40;</span><span style="color: #F78811;">0</span><span
					style="color: #F78811;">&#41;</span
				>.<span style="color: #000080;">_</span>1 <span style="color: #000080;">==</span> <span
					style="color: #000080;">_</span
				>oraclePoolNFT</div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #008000; font-style: italic;">// check if the price reached target</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #0000ff; font-weight: bold;">val</span
				> targetPriceReached<span style="color: #000080;">:</span> Boolean <span
					style="color: #000080;">=</span
				> currentRate <span style="color: #000080;">&lt;=</span> hodlTargetRate</div></li><li
			style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            validDataInput <span
					style="color: #000080;">&amp;&amp;</span
				> targetPriceReached</div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span
					style="color: #F78811;">&#125;</span
				> <span style="color: #0000ff; font-weight: bold;">else</span> <span style="color: #F78811;"
					>&#123;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">            <span
					style="color: #0000ff; font-weight: bold;">false</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        <span
					style="color: #F78811;">&#125;</span
				></div></li><li style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #F78811;">&#125;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">&nbsp;</div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #0000ff; font-weight: bold;">if</span
				><span style="color: #F78811;">&#40;</span>priceTargetReached || maxHeightReached<span
					style="color: #F78811;">&#41;</span
				><span style="color: #F78811;">&#123;</span></div></li><li
			style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        sigmaProp<span
					style="color: #F78811;">&#40;</span
				>fundsReturned <span style="color: #000080;">&amp;&amp;</span> feesPaid<span
					style="color: #F78811;">&#41;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #F78811;">&#125;</span
				> <span style="color: #0000ff; font-weight: bold;">else</span> <span style="color: #F78811;"
					>&#123;</span
				></div></li><li style="font-weight: bold; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">        sigmaProp<span
					style="color: #F78811;">&#40;</span
				><span style="color: #0000ff; font-weight: bold;">false</span><span style="color: #F78811;"
					>&#41;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">    <span
					style="color: #F78811;">&#125;</span
				></div></li><li style="font-weight: normal; vertical-align:top;"><div
				style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span
					style="color: #F78811;">&#125;</span
				></div></li></ol></pre>
