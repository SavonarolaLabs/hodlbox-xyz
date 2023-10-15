<script lang="ts">
	import { unconfirmed_sales, selected_wallet_ergo, utxos, assets } from '$lib/store/store.ts';
	import { notifier } from '@beyonk/svelte-notifications';
	import { sellTx } from './contract/sellTx.js';
	import { CONTRACT, DEV_PK } from './contract/sellForErg.js';

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
		if (selectedAssets.length < 1) {
			notifier.info('Add Tokens.', 1500);
			return;
		}
		if (priceInErg == undefined) {
			notifier.info('Set a price.', 1500);
			return;
		}

		const myAddress = await ergo.get_change_address();
		const height = await ergo.get_current_height();
		const unsigned = sellTx(
			CONTRACT,
			myAddress,
			$utxos,
			height,
			DEV_PK,
			selectedAssets,
			BigInt(priceInErg * 10 ** 9)
		);
		const signed = await ergo.sign_tx(unsigned);

		const transactionId = await ergo.submit_tx(signed);

		const unconfirmedSale = {
			tokens: JSON.parse(
				JSON.stringify(
					selectedAssets.map((a) => {
						return { tokenId: a.tokenId, amount: a.amount.toString() };
					})
				)
			),
			seller: myAddress,
			tx: signed,
			transactionId,
			priceInErg
		};

		unconfirmed_sales.update((a) => {
			a.push(unconfirmedSale);
			return a;
		});
		localStorage.setItem('ergo_bay_unconfirmed_sales', JSON.stringify($unconfirmed_sales));

		cleanUpSaleWidget();

		//add tx + a
		//console.log(signed);
	}

	$: loadWalletBoxes($selected_wallet_ergo);
</script>

<div class="mt-4 p-4 box w-full flex flex-wrap backdrop-blur-md bg-opacity-10 shadow-sm">
	<div class="flex flex-col w-full flex">
		<button class="btn p-4" style="width:230px;" on:click={lockAssets}> lock 10.000 ERG </button>
		<div class="flex mt-2">
			<button class="inactive pl-4 pr-2 py-1 option-left">hodlERG3</button>
			<div style="height:100%; width:1px; background:gray;"></div>
			<button class="  active pr-4 pl-2 py-1 option-right">ERG</button>
		</div>
	</div>
</div>

<style>
	.active{
		background-color: #d1d1d1;
		color: #263962;
	}
	.active:hover{
		background-color: #eeeeee;
	}
	.inactive{
		background-color: #08080873;
	}
	.option-left{
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.option-right{
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
	}


	.box {
		max-width: 600px;
		background: rgba(16, 16, 16, 0.2);
		border: 1px solid #80808045;
		border-top: 2px solid #a9a9a945;
	}
	.assets>button:nth-child(even){
		background-color: rgba(255, 255, 255, 0.065);
	}
	.assets>button:hover{
		background-color: rgba(255, 255, 255, 0.17);
	}
</style>
