<script lang="ts">
	import { ErgoAddress, SSigmaProp, TokensCollection } from '@fleet-sdk/core';
	import { buyTx } from './contract/buyTx.js';
	import { selected_wallet_ergo } from './store/store.js';
	import { notifier } from '@beyonk/svelte-notifications';
	import { HODLERG3_TOKEN_ID } from './contract/settings.js';

	export let offer;

	async function buy() {
		if (!$selected_wallet_ergo || !window.ergoConnector[$selected_wallet_ergo]?.isConnected) {
			notifier.info('Connect a wallet.', 1500);
			return;
		}

		const myAddress = await ergo.get_change_address();
		const utxos = await ergo.get_utxos();
		const height = await ergo.get_current_height();

		const priceInNanoErg = BigInt(offer.additionalRegisters.R4.renderedValue);
		const sellerAddress = ErgoAddress.fromPublicKey(
			offer.additionalRegisters.R5.serializedValue.substring(4)
		).toString();
		const devAddress = ErgoAddress.fromPublicKey(
			offer.additionalRegisters.R6.serializedValue.substring(4)
		).toString();

		let box = JSON.parse(JSON.stringify(offer));
		for (const [k, v] of Object.entries(box.additionalRegisters)) {
			box.additionalRegisters[k] = v.serializedValue;
		}

		const unsigned = await buyTx(
			box,
			myAddress,
			utxos,
			height,
			priceInNanoErg,
			sellerAddress,
			devAddress
		);

		const signed = await ergo.sign_tx(unsigned);
		const transactionId = await ergo.submit_tx(signed);
		console.log(transactionId);
	}
</script>

<div class="p-4 flex flex-col justify-center items-center">
	<img src={offer.treasure.img} alt="" style="width:200px;height:auto;" />
	<div class="flex gap-2">
		{offer.treasure.name}
	</div>

	<div class="text-slate-500">
		<a href="https://explorer.ergoplatform.com/en/addresses/{offer.hodler}"
			>{offer.hodler.substr(0, 3)}...{offer.hodler.substr(
				offer.hodler.length - 3,
				offer.hodler.length - 1
			)}
		</a>
	</div>
</div>

<style>
</style>
