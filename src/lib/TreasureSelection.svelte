<script lang="ts">
	import { ALL_TREASURES } from '$lib/store/store.js';
</script>

{#each ALL_TREASURES as chest}
	<img src="{chest.img}" alt="" />
{/each}
