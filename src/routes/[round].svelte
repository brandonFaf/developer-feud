<script lang="ts">
    import Styles from '../components/Styles.svelte'
    import Board from '../components/Board.svelte';
	import type { Round } from 'src/models/round';
	import rounds from '../data/rounds';
	import { roundScore, team1Score, team2Score } from '../data/scoreStore';
	import { page } from '$app/stores';
import X from '../components/X.svelte';
	let round: Round;
	let roundNum: number;
    let wrong:boolean[] = [];
    let display = 'none';
	$: {
		roundNum = parseInt($page.params.round!);
		round = rounds[roundNum];
        $roundScore = 0;
        wrong=[]
	}
    const giveX = ()=>{
        display = 'block';
        setTimeout(()=>display = 'none', 1000)
        console.log(wrong.length)
        if(wrong.length < 3){
            wrong=[...wrong,true]
        }
    }
</script>
<div style:display class="bigX">X</div>
<div class="round-container">
		<a style:visibility={roundNum > 0 ? 'visible': 'hidden' } href="/{roundNum - 1}">
			<svg xmlns="http://www.w3.org/2000/svg" class="arrow" viewBox="0 0 20 20" fill="currentColor">
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>

	<div class:inverted={round.inverted} class="round">Round {roundNum}</div>

		<a style:visibility={roundNum < 4 ? 'visible': 'hidden' } href="/{roundNum + 1}">
			<svg xmlns="http://www.w3.org/2000/svg" class="arrow" viewBox="0 0 20 20" fill="currentColor">
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>

</div>
<div class="gameBoard">
	<div on:click={()=>giveX()} class="score" id="boardScore">{$roundScore}</div>
	<div on:click={()=>$team1Score += $roundScore} class="score" id="team1">{$team1Score}</div>
	<div on:click={()=>$team2Score += $roundScore} class="score" id="team2">{$team2Score}</div>

	<div class="questionHolder">
		<span class="question">{round.question}</span>
	</div>

	<Board answers={round.answers} />
    <div class="btnHolder">
        {#each wrong as w }
        <X/>
        {/each}
    </div>
	<Styles/>
</div>

<style>
	.round-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.round {
		font-size: 60px;
		color: white;
		padding: 0 25px;
		background: linear-gradient(to bottom, #7db9e8 0%, #207cca 49%, #2989d8 50%, #1e5799 100%);
		border-radius: 10px;
		width: auto;
		border: 2px solid #003c7b;
		margin: 10px;
	}
	.arrow {
		height: 60px;
		color: #204675;
	}
    .inverted{
  transform: rotate(180deg);    }
  .bigX{
      			font-family: helvetica, sans-serif;
padding-top:10%;
color: red;
		font-size: 400px;
		font-weight: bold;
		border: 30px solid red;
		margin: 0;
		text-align: center;
        position: absolute;
        top:calc(50% - 200px);
        left:38.5%;
        z-index: 99;
  }
</style>
