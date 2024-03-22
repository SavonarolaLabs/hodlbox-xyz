
<style>
	.hljs {
	  color: #ddd;
	}
	
	.hljs-tag,
	.hljs-keyword,
	.hljs-selector-tag,
	.hljs-literal,
	.hljs-strong,
	.hljs-name {
	  color: #f92672;
	}
	
	.hljs-code {
	  color: #66d9ef;
	}
	
	.hljs-attribute,
	.hljs-symbol,
	.hljs-regexp,
	.hljs-link {
	  color: #bf79db;
	}
	
	.hljs-string,
	.hljs-bullet,
	.hljs-subst,
	.hljs-title,
	.hljs-section,
	.hljs-emphasis,
	.hljs-type,
	.hljs-built_in,
	.hljs-selector-attr,
	.hljs-selector-pseudo,
	.hljs-addition,
	.hljs-variable,
	.hljs-template-tag,
	.hljs-template-variable {
	  color: #a6e22e;
	}
	
	.hljs-title.class_,
	.hljs-class .hljs-title {
	  color: white;
	}
	
	.hljs-comment,
	.hljs-quote,
	.hljs-deletion,
	.hljs-meta {
	  color: #75715e;
	}
	
	.hljs-keyword,
	.hljs-selector-tag,
	.hljs-literal,
	.hljs-doctag,
	.hljs-title,
	.hljs-section,
	.hljs-type,
	.hljs-selector-id {
	  font-weight: bold;
	}
	
	.ios-buttons {
		display: flex;
		gap: 5px;
		padding: 0.7em;
		padding-left: 1em;
	}
	
	.ios-button {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: #fff;
		cursor: pointer;
	}
	
	.ios-button.close {
		background-color: #ff3b30;
	}
	
	.ios-button.minimize {
		background-color: #ffcc00;
	}
	
	.ios-button.maximize {
		background-color: #4cd964;
	}
	
	.fake-window-header {
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
		position: sticky;
		top: 0;
		background-color: #1e1e1e;
		width:100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: gray;
		font-family: monospace;
	}
	
	.editor-flex {
		background: #1e1e1e;
		position: relative;
		border-bottom-left-radius: 8px;
		border-bottom-right-radius: 8px;
		overflow: scroll;
		resize: both;
		-webkit-box-shadow: 0px 0px 81px 5px rgba(0, 0, 0, 0.7);
		-moz-box-shadow: 0px 0px 81px 5px rgba(0, 0, 0, 0.7);
		box-shadow: 0px 0px 81px 5px rgba(0, 0, 0, 0.7);
	}
	.source-code{
		margin-left:16px;
	}
	</style>
	
	
	<div class="editor-flex">
		<div class="fake-window-header">
					<div class="ios-buttons">
						<div class="ios-button close" />
						<div class="ios-button minimize" />
						<div class="ios-button maximize" />
					</div>
					<div style="padding-right:8px;">ergoscript</div>
				</div>
				<div class="source-code">
					<pre><code class="hljs">&#123;
		<span class="hljs-keyword">val</span> hodlTargetRate : <span class="hljs-type">Long</span>     = <span class="hljs-type">SELF</span>.<span class="hljs-type">R4</span>[<span class="hljs-type">Long</span>].get
		<span class="hljs-keyword">val</span> maxHeight : <span class="hljs-type">Int</span>           = <span class="hljs-type">SELF</span>.<span class="hljs-type">R5</span>[<span class="hljs-type">Int</span>].get
		<span class="hljs-keyword">val</span> hodlerPK : <span class="hljs-type">SigmaProp</span>      = <span class="hljs-type">SELF</span>.<span class="hljs-type">R6</span>[<span class="hljs-type">SigmaProp</span>].get
		<span class="hljs-keyword">val</span> uiFeePK : <span class="hljs-type">SigmaProp</span>       = <span class="hljs-type">SELF</span>.<span class="hljs-type">R7</span>[<span class="hljs-type">SigmaProp</span>].get
	 
		<span class="hljs-keyword">val</span> totalLockedNanoErg : <span class="hljs-type">Long</span> = <span class="hljs-type">SELF</span>.value
	 
		<span class="hljs-keyword">val</span> fees: <span class="hljs-type">Coll</span>[(<span class="hljs-type">SigmaProp</span>, <span class="hljs-type">BigInt</span>)] = &#123;
			<span class="hljs-keyword">val</span> feeDenom : <span class="hljs-type">Long</span> = <span class="hljs-number">100000</span>L
			<span class="hljs-keyword">val</span> devFee   : <span class="hljs-type">Long</span> = <span class="hljs-number">500</span>L         <span class="hljs-comment">// 0.5%</span>
			<span class="hljs-keyword">val</span> uiFee    : <span class="hljs-type">Long</span> = <span class="hljs-number">500</span>L         <span class="hljs-comment">// 0.5%</span>
				<span class="hljs-type">Coll</span>(
					 (_contractDevPK, (devFee.toBigInt * totalLockedNanoErg.toBigInt) / feeDenom.toBigInt),
					 (uiFeePK, (uiFee.toBigInt * totalLockedNanoErg.toBigInt) / feeDenom.toBigInt)
				)
		&#125;
	 
		<span class="hljs-keyword">val</span> feesPaid : <span class="hljs-type">Boolean</span> = &#123;
			<span class="hljs-keyword">val</span> devFeesPaid: <span class="hljs-type">Boolean</span> = &#123;
				<span class="hljs-keyword">if</span>(fees(<span class="hljs-number">0</span>)._2 &gt; <span class="hljs-number">0</span>)&#123;
					<span class="hljs-keyword">val</span> devOutput : <span class="hljs-type">Box</span>   = <span class="hljs-type">OUTPUTS</span>(<span class="hljs-number">1</span>)
					allOf(
						<span class="hljs-type">Coll</span>(
							devOutput.propositionBytes   == fees(<span class="hljs-number">0</span>)._1.propBytes,
							devOutput.value.toBigInt     &gt;= fees(<span class="hljs-number">0</span>)._2
						)
					)
				&#125;<span class="hljs-keyword">else</span>&#123;
					<span class="hljs-literal">true</span>
				&#125;
			&#125;
	 
			<span class="hljs-keyword">val</span> uiFeesPaid : <span class="hljs-type">Boolean</span> = &#123;
				<span class="hljs-keyword">if</span>(fees(<span class="hljs-number">1</span>)._2 &gt; <span class="hljs-number">0</span>)&#123;
					<span class="hljs-keyword">val</span> uiOutput : <span class="hljs-type">Box</span>    = <span class="hljs-type">OUTPUTS</span>(<span class="hljs-number">2</span>)
					allOf(
						<span class="hljs-type">Coll</span>(
							uiOutput.propositionBytes   == fees(<span class="hljs-number">1</span>)._1.propBytes,
							uiOutput.value.toBigInt     &gt;= fees(<span class="hljs-number">1</span>)._2
						)
					)
				&#125;<span class="hljs-keyword">else</span>&#123;
					<span class="hljs-literal">true</span>
				&#125;
			&#125;
			devFeesPaid &amp;&amp; uiFeesPaid
		&#125;
	 
		<span class="hljs-keyword">val</span> feesTotal : <span class="hljs-type">Long</span> = fees(<span class="hljs-number">0</span>)._2 + fees(<span class="hljs-number">1</span>)._2
	 
		<span class="hljs-keyword">val</span> repaymentNanoErg : <span class="hljs-type">Long</span> = totalLockedNanoErg - feesTotal
	 
		<span class="hljs-keyword">val</span> fundsReturned : <span class="hljs-type">Boolean</span> = &#123;
			<span class="hljs-type">OUTPUTS</span>(<span class="hljs-number">0</span>).propositionBytes == hodlerPK.propBytes &amp;&amp; 
			<span class="hljs-type">OUTPUTS</span>(<span class="hljs-number">0</span>).value &gt;= repaymentNanoErg &amp;&amp;
			<span class="hljs-type">OUTPUTS</span>(<span class="hljs-number">0</span>).<span class="hljs-type">R4</span>[<span class="hljs-type">Coll</span>[<span class="hljs-type">Byte</span>]].get == <span class="hljs-type">SELF</span>.id
		&#125;
	 
		<span class="hljs-keyword">val</span> maxHeightReached : <span class="hljs-type">Boolean</span> = &#123;
			maxHeight &lt;= <span class="hljs-type">HEIGHT</span>
		&#125;
	 
		<span class="hljs-keyword">val</span> priceTargetReached : <span class="hljs-type">Boolean</span> = &#123;
			<span class="hljs-keyword">if</span> (<span class="hljs-type">CONTEXT</span>.dataInputs.size &gt; <span class="hljs-number">0</span>) &#123;
				<span class="hljs-comment">// validate Oracle box</span>
				<span class="hljs-keyword">val</span> oracleBox : <span class="hljs-type">Box</span> = <span class="hljs-type">CONTEXT</span>.dataInputs(<span class="hljs-number">0</span>)
				<span class="hljs-keyword">val</span> currentRate : <span class="hljs-type">Long</span> = oracleBox.<span class="hljs-type">R4</span>[<span class="hljs-type">Long</span>].get
				<span class="hljs-keyword">val</span> oracleHeight: <span class="hljs-type">Long</span> = oracleBox.<span class="hljs-type">R5</span>[<span class="hljs-type">Int</span>].get
	 
				<span class="hljs-keyword">val</span> validDataInput: <span class="hljs-type">Boolean</span> = <span class="hljs-type">HEIGHT</span> &lt;= oracleHeight + <span class="hljs-number">30</span> &amp;&amp; oracleBox.tokens(<span class="hljs-number">0</span>)._1 == _oraclePoolNFT
	 
				<span class="hljs-comment">// check if the price reached target</span>
				<span class="hljs-keyword">val</span> targetPriceReached: <span class="hljs-type">Boolean</span> = currentRate &lt;= hodlTargetRate
	 
				validDataInput &amp;&amp; targetPriceReached
			&#125; <span class="hljs-keyword">else</span> &#123;
				<span class="hljs-literal">false</span>
			&#125;
		&#125;
	 
		<span class="hljs-keyword">if</span>(priceTargetReached || maxHeightReached)&#123;
			sigmaProp(fundsReturned &amp;&amp; feesPaid)
		&#125; <span class="hljs-keyword">else</span> &#123;
			sigmaProp(<span class="hljs-literal">false</span>)
		&#125;
	&#125;</code></pre>
				</div>   
		</div>
		