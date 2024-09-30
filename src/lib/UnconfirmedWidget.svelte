<script lang="ts">
	import { base } from '$app/paths';
	export let mint: any;
</script>

<div class="p-4 flex flex-col items-center">
	<img src="{base}{mint.treasure.img}" alt="" style="width:200px;" class="blink" />
	<div class="">
		<div>minting...</div>
		<a
			target="_blank"
			href="https://explorer.ergoplatform.com/en/transactions/{mint.transactionId}"
			class="underline"
		>
			transactionID
		</a>
	</div>
</div>

<style>
	.blink {
		animation: blinkMe 3s linear infinite;
	}
	@keyframes blinkMe {
		0% {
			opacity: 0.4;
		}
		50% {
			opacity: 0.8;
		}
		100% {
			opacity: 0.4;
		}
	}
</style>
