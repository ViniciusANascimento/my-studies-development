import { PlayerStatisticsModel } from "../models/player-statistics-model";
import PlayerModel from "../models/players-model";

const database:PlayerModel[] = [
	
]

export const findAllPlayers = async (): Promise<PlayerModel[]> =>{
	return database;
}

export const findPlayerById = async (id:number): Promise<PlayerModel | undefined> =>{
	return database.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) =>{
	database.push(player);
}

export const deleteOnePlayer = async (id: number) =>{
	const index = database.findIndex(player => player.id === id);

	if(index !== -1){
		database.splice(index,1);
		return true;
	}
	return false;
}

export const findAndModifyPlayer = async(id:number, statistics: PlayerStatisticsModel) =>{

	const playerIndex = database.findIndex(player => player.id === id)

	if(playerIndex !== -1){
		database[playerIndex].statistics = statistics;
	}

	return database[playerIndex];
};