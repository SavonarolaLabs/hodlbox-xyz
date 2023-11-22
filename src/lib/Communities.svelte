<script lang="ts">
    import {dev_ui_pk, all_treasures, selected_treasure, HODLBOX_TREASURES, BITMASKS_TREASURES, target_price, WALRUS_TREASURES} from "$lib/store/store.js"
	import { BITMASKS_DEV_UI_PK, BITMASKS_TARGET_PRICE, HODLBOX_DEV_UI_PK, HODLBOX_TARGET_PRICE, WALRUS_DEV_UI_PK, WALRUS_TARGET_PRICE } from "./contract/settings.js";
    function selectCommunity(community:string){
        if(community == 'hodlbox'){
            target_price.set(HODLBOX_TARGET_PRICE)
            dev_ui_pk.set(HODLBOX_DEV_UI_PK)
            all_treasures.set(HODLBOX_TREASURES)
            selected_treasure.set($all_treasures[0]);
        }
        if(community == 'bitmasks'){
            target_price.set(BITMASKS_TARGET_PRICE)
            dev_ui_pk.set(BITMASKS_DEV_UI_PK)
            all_treasures.set(BITMASKS_TREASURES)
            selected_treasure.set($all_treasures[0]);
        }
        if(community == 'walrus'){
            target_price.set(WALRUS_TARGET_PRICE)
            dev_ui_pk.set(WALRUS_DEV_UI_PK)
            all_treasures.set(WALRUS_TREASURES)
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
    <button class="enlarge border rounded-xl w-12 h-12" on:click={()=>selectCommunity('walrus')}>
        <img src="chest/walrus/icon.png" alt="" style="width: 42px;">
    </button>
</div>

<style>
    .enlarge:hover{
        scale: 1.1;
    }
</style>