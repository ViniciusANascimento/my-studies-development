interface PlayerModel{
	id: number;
	name: string;
	club: string;
	nationality: string;
	statistics: {
		Overall: number;
		Pace: number;
		Shotting: number;
		Passing: number;
		Dribbling: number;
		Defending: number;
		Physical: number;
	}
}

export default PlayerModel;