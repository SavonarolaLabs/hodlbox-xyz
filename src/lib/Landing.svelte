<script lang="ts">
	import LockButton from '$lib/LockButton.svelte';
	import Communities from '$lib/Communities.svelte';
	import TreasureSelection from '$lib/TreasureSelection.svelte';
	import { dev_ui_pk } from './store/store.js';
	import { ERDOGE_DEV_UI_PK } from './contract/settings.js';
	import MemeTreasureSelection from './MemeTreasureSelection.svelte';
</script>

<div class="bg-main grow flex flex-col justify-center items-center gap-5" style="padding-top:80px;">
	<Communities />
	{#if $dev_ui_pk == ERDOGE_DEV_UI_PK}
		<MemeTreasureSelection />
	{:else}
		<TreasureSelection />
	{/if}
	<LockButton />
</div>

<style>
	.bg-main {
		min-height: 100vh;
		background-image: url('https://savonarolalabs.github.io/hodlbox-xyz/bg/bg.png');
		background-position: bottom;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
