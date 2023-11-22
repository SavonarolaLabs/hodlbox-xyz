<script lang="ts">
	import WalletButton from '$lib/WalletButton.svelte';
	import { BITMASKS_DEV_UI_PK, HODLBOX_DEV_UI_PK } from '$lib/contract/settings.js';
	import { dev_ui_pk, offers } from '$lib/store/store.js';
</script>

<div
	class="z-10 fixed flex p-4 items-center w-full justify-between backdrop-blur bg-opacity-10 shadow-sm"
	style="height:77px;border-bottom: 1px solid #80808045"
>
	<div class="flex items-center gap-4">
	<a href="/" class="flex items-center gap-2" style="text-decoration:none;">
		<div style="width: 64px;">
			{#if $dev_ui_pk == HODLBOX_DEV_UI_PK}
				<img src="ship.png" alt="" class="w-16">
			{:else if $dev_ui_pk == BITMASKS_DEV_UI_PK}
				<img src="chest/bitmasks/icon.png" alt="" class="w-12 ml-2">
			{:else}
				<img src="chest/walrus/icon.png" alt="" class="w-12 ml-2">
			{/if}
		</div>
			<div class="font-bold text-2xl ml-2">HodlBox</div>
		</a>
	<div class="pt-1">THVL ${$offers.map(b => b.treasure?.name).filter(x=>x).map(v =>v.replace('.00','').replace(',','').match(/(\d+)/)[0]).reduce((a,e)=> +a+(+e), 0)}</div>
	</div>
	<div class="flex items-center gap-4">
		<WalletButton />
	</div>
</div>
