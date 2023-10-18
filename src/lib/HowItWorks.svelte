<script lang="ts">
	import { selected_currency, target_price } from '$lib/store/store.js';
    import SmartContractErg from "$lib/SmartContractErg.svelte"
</script>

<div class="w-full min-h-full bg-main flex flex-col items-center">
	<div class="w-full max-w-4xl flex flex-col gap-2">
		<div class=" text-4xl mt-10 mb-5">How does it work?</div>
		<div>
			1. Your {$selected_currency} is locked on Ergo Blockchain behind a
			{#if $selected_currency == 'ERG'}
				<a href="https://github.com/SavonarolaLabs/hodlbox-xyz/blob/main/src/lib/contract/hodl.ts"
					>smart contract.</a
				>
			{:else}
				<a
					href="https://github.com/SavonarolaLabs/hodlbox-xyz/blob/main/src/lib/contract/hodl_hodlerg3.ts"
					>smart contract.</a
				>
			{/if}
		</div>
		<div>2. As soon as Ergo pumps to ${$target_price / 10n ** 9n}/ERG your coins unlock.*</div>
		<div>3. Unlocked coins can only be sent to your wallet.</div>
		<div class="text-sm">
			*If ${$target_price / 10n ** 9n}/ERG is not reached, your {$selected_currency} unlocks on 2024-10-15.
		</div>

		<div style="max-width:700px;">
			<img src="hodl.jpeg" alt="" class="mt-10" />

			<div class=" text-4xl mt-20 mb-10 self-end">
				<a
					href="https://ergoplatform.org/en/news/ErgoHack-7-The-Future-of-Finance-and-the-Path-to-Adoption/"
					>ERGOHACKVII</a
				>
				letter
			</div>

			<div class="bg-white p-16 self-end paper text-black italic shadow-md">
				Dear Hackathon Committee,<br /><br />

				We are excited to present our ErgoHack project, HodlBox. This dApp is designed to encourage
				long-term investment in the Ergo ecosystem. Our project addresses a common challenge in
				crypto: holding onto your coins over an extended period of time and not selling the bottom.
				To combat this, we've devised a non-custodial vault that allows users to stash their ERG
				until a specific time or price point is reached on Spectrum DEX. When a user purchases a
				Hodl Box, they will also receive a commemorative NFT as a token of their commitment. The
				NFTs become increasingly awesome with larger sums, adding a fun way for users to flex on
				social media.<br /><br />

				Our project is open-source, welcoming UI competition and abiding by Ergo’s open source
				ethos. It's designed to be user-friendly, allowing users to mint in just two clicks.The Hodl
				Box system is secure and risk-free. Only the person who locked the box can unlock it, either
				when a certain price point is reached or after the established time period. The NFTs serve
				as a fun reward and Proof of Hodl, but they are not connected to the redemption process,
				eliminating the risk of losing access to your Hodl Box.<br /><br />

				We've implemented a small fee structure (0.5% contract, 0.5% UI) to support the project's
				sustainability. Importantly, the developers hold as well, with fees only paid after the hodl
				period, aligning the incentives of the ecosystem, users, and developers.<br /><br />

				In conclusion, our project offers a perfect financial tool for the coming bull market,
				encouraging long-term investment and increasing the TVL in the Ergo ecosystem. We look
				forward to sharing our website and contract with you soon.<br /><br />

				Best Regards,<br /><br />

				TMR.ERG, c8, savonarola
			</div>
		</div>

        <div>
            <div class=" text-4xl mt-10 mb-5">Smart Contract</div>
            <div>
                <SmartContractErg></SmartContractErg>
            </div>
        </div>
	</div>
</div>

<style>
	.bg-main {
		min-height: 100vh;
		background-image: url('https://hodlbox.xyz/bg/1px.png');
		background-size: cover;
		background-repeat-x: repeat;
	}
</style>
