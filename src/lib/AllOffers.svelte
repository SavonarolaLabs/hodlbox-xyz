<script class="ts">
	import { offers } from '$lib/store/store';
	import BuyWidget from '$lib/BuyWidget.svelte';
</script>

<h2 class="text-4xl">Locked Boxes</h2>
<div class="w-full justify-center flex flex-wrap">
	{#each $offers.filter((o) => o.currency) as offer}
		<BuyWidget {offer} />
	{/each}
</div>
<div class="mb-10" />
