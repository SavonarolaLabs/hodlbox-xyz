<script lang="ts">
	import LockButton from "$lib/LockButton.svelte";
	import Communities from "$lib/Communities.svelte";
	import TreasureSelection from "$lib/TreasureSelection.svelte";

    
</script>

<div class="bg-main grow flex flex-col  justify-center items-center gap-5" style="padding-top:80px;">
    <Communities></Communities>
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