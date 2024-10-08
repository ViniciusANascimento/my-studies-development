import HttpResponse from "../models/http-response-model";
import { PlayerStatisticsModel } from "../models/player-statistics-model";
import PlayerModel from "../models/players-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

async function verifyContent(data:PlayerModel | PlayerModel[] | undefined) {
	let validateData;
	if(!data){
		validateData = await httpResponse.ok(data);
	}else {
		validateData = await httpResponse.noContent();
	}
	return validateData;
}

export const getPlayerData = async() =>{
	
	const data = await PlayerRepository.findAllPlayers();
	let response = null;

	return response = await verifyContent(data);
}

export const getPlayerByIdService = async (id:number) => {

	const data = await PlayerRepository.findPlayerById(id);
	let response = null;

	return response = await verifyContent(data);
}

export const createPlayerService = async(player:PlayerModel) =>{
	let response
	if(Object.keys(player).length !== 0){
		await PlayerRepository.insertPlayer(player)
		response = await httpResponse.created()
	}else{
		response = await httpResponse.badRequest();
	}

	return response;
}

export const deletePlayerService = async (id:number) => {
	let response:HttpResponse;
	const isDeleted = await PlayerRepository.deleteOnePlayer(id);
	if(!isDeleted){
		response = await httpResponse.badRequest();
	}else{
		response = await httpResponse.ok({message: "deleted"})
	}
	return response;
}

export const updatePlayerService = async (id:number, statistics:PlayerStatisticsModel) => {

	let response:HttpResponse;
	const data = await PlayerRepository.findAndModifyPlayer(id, statistics);

	if(Object.keys(data).length ===0){
		response = await httpResponse.badRequest();
	}else{
		response = await httpResponse.ok(data)
	}
	return response;
}