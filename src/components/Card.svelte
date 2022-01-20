<script lang="ts">
	import type { Answer } from 'src/models/round';
	import { roundScore } from '../data/scoreStore';
	export let answer: Answer;
	import { page } from '$app/stores';
	const revealCorrectAnswer = () => {
		if (Audio) {
			const audio = new Audio();
			audio.src = '/correct.mp3';
			audio.currentTime = 0;
			audio.loop = false;

			audio.play();
		}
		answer.reveal = true;
		$roundScore += $page.url.searchParams.get('double') ? answer.points * 2 : answer.points;
	};
	function flip(node, { delay = 0, duration = 500 }) {
		return {
			delay,
			duration,
			css: (t, u) => `
				transform: rotateX(${1 - u * 180}deg);
                				opacity: ${1 - u};

			`
		};
	}
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
