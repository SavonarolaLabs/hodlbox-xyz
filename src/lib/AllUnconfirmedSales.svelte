<script lang="ts">
    import UnconfirmedWidget from "./UnconfirmedWidget.svelte"
    import {unconfirmed_mints} from "$lib/store/store.js"
</script>
{#each $unconfirmed_mints as mint}
        <UnconfirmedWidget {mint}></UnconfirmedWidget>
{/each}