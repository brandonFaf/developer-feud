<div class="container">
	<a href="/0" class="logoLink"><img class="logo" src="/DevFeud.png" alt="logo" /></a>
	<div class="credits">
		<h1>Credits:</h1>

		<div class="credit-row">
			<img class="jspartylogo" src="/js-party-original.png" alt="jspartylogo" />
			<a href="https://codepen.io/MacEvelly/pen/rLWeYP?editors=0010">Brent Williams</a>
			<div>Ivan Witteborg</div>
		</div>
	</div>
	<style>
		html {
			height: 100%;
			width: 100%;
		}
		body {
			background: #a7cfdf;
			background: -moz-linear-gradient(top, #a7cfdf 0%, #23538a 100%);
			background: -webkit-linear-gradient(top, #a7cfdf 0%, #23538a 100%);
			background: linear-gradient(to bottom, #a7cfdf 0%, #23538a 100%);
			filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#a7cfdf', endColorstr='#23538a', GradientType=0);
			padding: 25px;
			height: 100%;
			width: 100%;
			box-sizing: border-box;
			overflow: hidden;
		}
	</style>
</div>

<style>
	.logoLink {
		display: flex;
		justify-content: center;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		overflow: hidden;
		box-sizing: border-box;
		flex-direction: column;
	}
	.credits {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.credit-row {
		display: flex;
		flex-direction: row;
		width: 60%;
		justify-content: space-evenly;
		font-size: 30px;
		align-items: center;
	}
	.jspartylogo {
		width: 150px;
	}
	.logo {
		width: 60%;
	}
</style>
