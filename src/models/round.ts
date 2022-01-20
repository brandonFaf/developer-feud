export interface Round {
	answers: Answer[];
	question: string;
	inverted?: boolean;
}
export interface Answer {
	answer: string;
	points: number;
	rank: number;
	reveal?: boolean;
}
