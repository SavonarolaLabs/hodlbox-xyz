<script lang="ts">
	import LockButton from "$lib/LockButton.svelte";
	import TreasureSelection from "./TreasureSelection.svelte";

    
</script>

<div class="bg-main grow flex flex-col  justify-center items-center gap-5" style="padding-top:80px;">
    <TreasureSelection></TreasureSelection>
    <LockButton></LockButton>
</div>

<style>
    .bg-main{
        min-height: 100vh;
        background-image: url('https://hodlbox.xyz/bg/bg.png');
        background-position: bottom;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>