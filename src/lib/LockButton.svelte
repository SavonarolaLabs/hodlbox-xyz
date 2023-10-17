<script lang="ts">
	import {
		unconfirmed_mints,
		selected_wallet_ergo,
		utxos,
		assets,
		selected_treasure,
		selected_currency
	} from '$lib/store/store.ts';
	import { notifier } from '@beyonk/svelte-notifications';
	import { sellTx } from './contract/sellTx.js';
	import { CONTRACT, DEV_PK } from './contract/sellForErg.js';
	import { mintHodlErg3BoxTx } from './contract/sendToHodl_hodlerg3.js';
	import { HODLERG3_TOKEN_ID } from './contract/settings.js';
	import { ErgoAddress } from '@fleet-sdk/core';
	import { mintHodlBoxTx } from './contract/sendToHodl.js';

	let editAssets = false;
	let additionalAssets: Array<Token> = [];
	let selectedAssets: Array<Token> = [];
	let priceInErg: undefined | number;

	async function addAssetsToggle() {
		if (!$selected_wallet_ergo || !window.ergoConnector[$selected_wallet_ergo]?.isConnected) {
			notifier.warning('Please connect a wallet.', 1500);
			return;
		}
		editAssets = !editAssets;
		if (!editAssets) {
			loadWalletBoxes($selected_wallet_ergo);
		}
	}

	function sumTokens(acc, e) {
		if (acc.some((t) => t.tokenId == e.tokenId)) {
			acc.find((t) => t.tokenId == e.tokenId).amount += e.amount;
			return acc;
		} else {
			return [...acc, e];
		}
	}

	async function loadWalletBoxes(wallet) {
		if (window.ergoConnector[wallet]?.isConnected) {
			const boxes = await ergo.get_utxos();
			utxos.set(JSON.parse(JSON.stringify(boxes)));
			assets.set(
				boxes
					.flatMap((b) =>
						b.assets.map((t) => {
							t.amount = BigInt(t.amount);
							return t;
						})
					)
					.reduce(sumTokens, [])
			);
			additionalAssets = $assets.filter(
				(a) => !selectedAssets.some((sa) => sa.tokenId == a.tokenId)
			);
		}
	}

	function selectToken(token) {
		additionalAssets = additionalAssets.filter((t) => t.tokenId != token.tokenId);
		selectedAssets = [...selectedAssets, Object.assign({}, token)];
	}

	function removeToken(token) {
		additionalAssets = [$assets.find((a) => a.tokenId == token.tokenId), ...additionalAssets];
		selectedAssets = selectedAssets.filter((t) => t.tokenId != token.tokenId);
	}

	function cleanUpSaleWidget() {
		editAssets = false;
		selectedAssets = [];
	}

	async function lockAssets() {
		if (!$selected_wallet_ergo || !window.ergoConnector[$selected_wallet_ergo]?.isConnected) {
			notifier.info('Connect a wallet.', 1500);
			return;
		}
		const boxes = await ergo.get_utxos();
		const ergoBalance = BigInt(await ergo.get_balance());
		const hodlErg3Balance = boxes
			.flatMap((b) => b.assets)
			.reduce((a, ass) => a + (ass.tokenId == HODLERG3_TOKEN_ID ? BigInt(ass.amount) : 0n), 0n);

		const myAddress = await ergo.get_change_address();
		const height = await ergo.get_current_height();
		let unsigned

		if ($selected_currency == 'ERG') {
			if (ergoBalance< BigInt($selected_treasure.price * 10 ** 9)){
				notifier.info('Not enough Erg.', 1500);
				return;
			}
			
			 unsigned = await mintHodlBoxTx(
				myAddress,
				$utxos,
				height,
				$selected_treasure
			);

		} else {
			if (hodlErg3Balance < BigInt($selected_treasure.price * 10 ** 9)) {
				notifier.info('Not enough Tokens.', 1500);
				return;
			}

			const myAss = { tokenId: HODLERG3_TOKEN_ID, amount: $selected_treasure.price * 10 ** 9 + '' };
			unsigned = await mintHodlErg3BoxTx(
				myAddress,
				$utxos,
				height,
				myAss,
				$selected_treasure
			);

		}

		const signed = await ergo.sign_tx(unsigned);
		console.log(signed);
		const transactionId = await ergo.submit_tx(signed);
		console.log('transactionId:', transactionId);

		notifier.info('Transaction submitted', 3000);

		const unconfirmedSale = {
			treasure: $selected_treasure,
			currency: $selected_currency,
			hodler: myAddress,
			tx: signed,
			transactionId
		};

		unconfirmed_mints.update((a) => {
			a.push(unconfirmedSale);
			return a;
		});
		localStorage.setItem('ergo_bay_unconfirmed_mints', JSON.stringify($unconfirmed_mints));

		cleanUpSaleWidget();
	}

	$: loadWalletBoxes($selected_wallet_ergo);
</script>

<div class="mt-4 p-4 box w-full flex flex-col items-center justify-center">
	<button class="btn p-4" style="width:230px;" on:click={lockAssets}>
		Lock {$selected_treasure.price}
		{$selected_currency}
	</button>
	<div class="flex mt-2">
		<button
			class:inactive={$selected_currency != 'hodlERG3'}
			class:active={$selected_currency == 'hodlERG3'}
			class="pl-4 pr-2 py-1 option-left"
			on:click={() => selected_currency.set('hodlERG3')}>hodlERG3</button
		>
		<div style="height:100%; width:1px; background:gray;" />
		<button
			class:inactive={$selected_currency != 'ERG'}
			class:active={$selected_currency == 'ERG'}
			class="pr-4 pl-2 py-1 option-right"
			on:click={() => selected_currency.set('ERG')}>ERG</button
		>
	</div>
</div>

<style>
	.active {
		background-color: #d1d1d1;
		color: #263962;
		border: 1px solid gray;
	}
	.active:hover {
		background-color: #eeeeee;
	}
	.inactive {
		background-color: #08080873;
		border: 1px solid gray;
	}
	.option-left {
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.option-right {
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}

	.assets > button:nth-child(even) {
		background-color: rgba(255, 255, 255, 0.065);
	}
	.assets > button:hover {
		background-color: rgba(255, 255, 255, 0.17);
	}
</style>
