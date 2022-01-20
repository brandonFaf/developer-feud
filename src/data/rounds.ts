import type { Round } from 'src/models/round';

export const round1: Round = {
	question: 'Name something you might do on a Zoom meeting.',
	answers: [
		{ rank: 1, answer: ' tell someone that they’re muted. ', points: 22 },
		{ rank: 2, answer: ' Forget to turn off their video. ', points: 11 },
		{ rank: 3, answer: '  Chat ', points: 10 },
		{
			rank: 4,
			answer: ' Play with their virtual backgrounds/Change their backgrounds ',
			points: 9
		},
		{ rank: 5, answer: ' Basically, surf the web and do other things. ', points: 5 },
		{ rank: 6, answer: ' work ', points: 5 }
	]
};
export const round2: Round = {
	question: 'name something you learned, but never used in practice.',
	answers: [
		{ rank: 1, answer: 'Algorithms', points: 20 },
		{ rank: 2, answer: 'data structures', points: 13 },
		{ rank: 3, answer: 'testing/TDD', points: 10 },
		{ rank: 4, answer: 'Recursion', points: 5 }
	]
};
export const round3: Round = {
	question: 'What’s the first thing you do when your code doesn’t work right',
	answers: [
		{ rank: 1, answer: 'console log', points: 16 },
		{ rank: 2, answer: 'Re-run the code / Refresh the page', points: 15 },
		{ rank: 3, answer: 'swearing, crying, or sighing.', points: 13 },
		{ rank: 4, answer: 'debug', points: 11 },
		{ rank: 5, answer: 'Check the logs”, or “Check the error messages.”', points: 10 }
	]
};
export const round4: Round = {
	question: 'Which day of the week do you get the most coding done?',
	answers: [
		{ rank: 1, answer: 'Tuesday', points: 30 },
		{ rank: 2, answer: 'Wednesday', points: 22 },
		{ rank: 3, answer: 'Thursday', points: 15 },
		{ rank: 4, answer: 'monday', points: 12 },
		{ rank: 5, answer: 'Friday', points: 11 },
		{ rank: 6, answer: 'Everyday', points: 5 }
	]
};

export const round5: Round = {
	question: 'Name your favorite HTML element.',
	inverted: true,
	answers: [
		{ rank: 1, answer: 'Div', points: 10 },
		{ rank: 2, answer: 'Marquee', points: 20 },
		{ rank: 3, answer: 'Button', points: 30 },
		{ rank: 4, answer: 'Input', points: 40 },
		{ rank: 5, answer: 'Paragraph', points: 50 },
		{ rank: 6, answer: 'Script', points: 60 }
	]
};
export default [round1, round2, round3, round4, round5];
