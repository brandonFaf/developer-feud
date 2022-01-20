<script lang="ts">
	import type { Answer } from 'src/models/round';
	import { roundScore } from '../data/scoreStore';
	export let answer: Answer;
	import { page } from '$app/stores';
	console.log(answer.answer.length);
	const revealCorrectAnswer = () => {
		answer.reveal = true;
		$roundScore += $page.url.searchParams.get('double') ? answer.points * 2 : answer.points;
	};
</script>

{#if answer.reveal}
	<div class="cardHolder" style="perspective: 800px">
		<div
			class="card"
			style="
            transform-style: preserve-3d;
            transform: matrix3d(
              1,
              0,
              0,
              0,
              0,
              -1,
              0,
              0,
              0,
              0,
              -1,
              0,
              0,
              0,
              0,
              1
            );
          "
		>
			<div class="front" style="backface-visibility: hidden">
				<span class="DBG">{answer.rank}</span>
			</div>
			<div
				class="back DBG"
				style="
              transform: matrix3d(
                1,
                0,
                0,
                0,
                0,
                -1,
                0,
                0,
                0,
                0,
                -1,
                0,
                0,
                0,
                0,
                1
              );
              backface-visibility: hidden;
            "
			>
				<span class:smaller={answer.answer.length > 20}>{answer.answer}</span><b class="LBG"
					>{answer.points}</b
				>
			</div>
		</div>
	</div>
{:else}
	<div class="cardHolder" style="perspective: 800px" on:click={revealCorrectAnswer}>
		<div class="card" style="transform-style: preserve-3d">
			<div class="front" style="backface-visibility: hidden">
				<span class="DBG">{answer.rank}</span>
			</div>
			<div
				class="back DBG"
				style="
              transform: matrix3d(
                1,
                0,
                0,
                0,
                0,
                -1,
                0,
                0,
                0,
                0,
                -1,
                0,
                0,
                0,
                0,
                1
              );
              backface-visibility: hidden;
            "
			>
				<span class:smaller={answer.answer.length > 20}>{answer.answer}</span><b class="LBG"
					>{answer.points}</b
				>
			</div>
		</div>
	</div>
{/if}

<style>
	.smaller {
		font-size: 18px;
	}
</style>
