<script lang="ts">
	import type { Answer } from 'src/models/round';
	import { xlink_attr } from 'svelte/internal';
	import Card from './Card.svelte';
	export let answers: Answer[];
	let blocks = [];
	$: blocks = Array.from({ length: 8 }, (x, i) => answers[i] || {});
</script>

<div class="colHolder">
	<div class="col1">
		{#each blocks.slice(0, 4) as answer}
			{#if answer.answer}
				<Card {answer} />
			{:else}
				<div class="cardHolder empty" style="perspective: 800px;"><div /></div>
			{/if}
		{/each}
	</div>
	<div class="col2">
		{#each blocks.slice(4, 8) as answer}
			{#if answer.answer}
				<Card {answer} />
			{:else}
				<div class="cardHolder empty" style="perspective: 800px;"><div /></div>
			{/if}
		{/each}
	</div>
</div>
