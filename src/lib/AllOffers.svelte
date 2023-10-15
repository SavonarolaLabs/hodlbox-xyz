<script>
    import {offers} from "$lib/store/store";
	import BuyWidget from "./BuyWidget.svelte";
</script>


{#each $offers.filter(o => o.currency) as offer}
<BuyWidget {offer}></BuyWidget>
{/each}
<div class="mb-10"></div>
