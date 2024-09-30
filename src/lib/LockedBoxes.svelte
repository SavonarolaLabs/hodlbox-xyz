<script lang="ts">
	import AllOffers from './AllOffers.svelte';
	import AllUnconfirmedSales from './AllUnconfirmedSales.svelte';
	import { unconfirmed_mints } from './store/store.js';
</script>

<div class="bg-main grow flex flex-col items-center gap-5" style="padding-top:80px;">
	<AllUnconfirmedSales />
	<AllOffers />
</div>

<style>
	.bg-main {
		min-height: 100vh;
		background-image: url('https://savonarolalabs.github.io/hodlbox-xyz/bg/1px.png');
		background-size: cover;
		background-repeat-x: repeat;
	}
</style>
