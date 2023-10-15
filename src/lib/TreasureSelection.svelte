<script lang="ts">
	import { ALL_TREASURES, selected_treasure } from '$lib/store/store.js';
	function clickPreviousChest(){
		if($selected_treasure.id > 0){
			selected_treasure.set(ALL_TREASURES[$selected_treasure.id-1])
		}
	}
	function clickNextChest(){
		if($selected_treasure.id < ALL_TREASURES.length-1){
			selected_treasure.set(ALL_TREASURES[$selected_treasure.id+1])
		}
	}
</script>

<!-- {#each ALL_TREASURES as chest} -->
<div class="flex flex-col items-center">
	<div class="italic text-slate-400">unlock: 2024-10-15</div>
	<div class="text-7xl font-bold">{$selected_treasure.name.split(' ')[0]}</div>
	<div class="text-slate-300">$20.00/ERG</div>
</div>
<div class="flex items-center gap-4">
	<button disabled={$selected_treasure.id == 0} on:click={clickPreviousChest} style="width:100px;height:100px;">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
			><path fill={$selected_treasure.id == 0?'#CCC3':'#CCCD'} d="M3 12l18-12v24z" /></svg
		>
	</button>
	<img src={$selected_treasure.img} alt="" />
	<button disabled={$selected_treasure.id == ALL_TREASURES.length-1} on:click={clickNextChest} style="width:100px;height:100px;">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
			><path fill={$selected_treasure.id == ALL_TREASURES.length-1?'#CCC3':'#CCCD'} d="M21 12l-18 12v-24z" /></svg
		>
	</button>
</div>
<!-- {/each} -->
