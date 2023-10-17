<script lang="ts">
    import {dev_ui_pk, all_treasures, selected_treasure, HODLBOX_TREASURES, BITMASKS_TREASURES} from "$lib/store/store.js"
	import { BITMASKS_DEV_UI_PK, HODLBOX_DEV_UI_PK } from "./contract/settings.js";
    function selectCommunity(community){
        if(community == 'hodlbox'){
            dev_ui_pk.set(HODLBOX_DEV_UI_PK)
            all_treasures.set(HODLBOX_TREASURES)
            selected_treasure.set($all_treasures[0]);
        }
        if(community == 'bitmasks'){
            dev_ui_pk.set(BITMASKS_DEV_UI_PK)
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