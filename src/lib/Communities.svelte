<script lang="ts">
    import {all_treasures, selected_treasure, HODLBOX_TREASURES, BITMASKS_TREASURES} from "$lib/store/store"
    function selectCommunity(community){
        if(community == 'hodlbox'){
            all_treasures.set(HODLBOX_TREASURES)
            selected_treasure.set($all_treasures[0]);
        }
        if(community == 'bitmasks'){
            all_treasures.set(BITMASKS_TREASURES)
            selected_treasure.set($all_treasures[0]);
        }
    }
</script>

<div class="fixed flex flex-col left-0 top-0 mt-24 ml-4 gap-2">
    <button class="enlarge border rounded-xl w-12 h-12" on:click={()=>selectCommunity('hodlbox')}>
        <img src="ship.png" alt="">
    </button>
    <button class="enlarge border rounded-xl w-12 h-12" on:click={()=>selectCommunity('bitmasks')}>
        <img src="chest/bitmasks/icon.png" alt="">
    </button>
</div>

<style>
    .enlarge:hover{
        scale: 1.1;
    }
</style>