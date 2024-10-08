import { Request, Response } from "express";
import { PlayerStatisticsModel } from "../models/player-statistics-model";
import * as service from "../services/players-services";
import { badRequest } from "../utils/http-helper";

export const getPlayers = async (request:Request, response:Response)=>{
	const httpResponse = await service.getPlayerData();
	response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (request:Request, response: Response) =>{
	const id = parseInt(request.params.id);
	const httpResponse = await service.getPlayerByIdService(id);
	response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const postPlayer = async (request: Request, response: Response)=> {
	const bodyValue = request.body;
	const httpResponse = await service.createPlayerService(bodyValue);

	if(httpResponse){
		response.status(httpResponse.statusCode).json(httpResponse.body);
	}else{
		const res = await badRequest();
		response.status(res.statusCode).json(res.body);
	}
}

export const deletePlayer = async( request: Request, response: Response) =>{
	const id = parseInt(request.params.id);
	const httpResponse = await service.deletePlayerService(id);

	response.status(httpResponse.statusCode).json(httpResponse.body);
}

export const updatePlayer = async ( request: Request, response: Response) =>{
	const id = parseInt(request.params.id);
	const bodyValue:PlayerStatisticsModel = request.body;

	const httpResponse = await service.updatePlayerService(id,bodyValue);
	response.status(httpResponse.statusCode).json(httpResponse.body);
}

