import { Request, Response } from "express";
import * as service from "../services/clubs-services";

export const getClubs = async (request: Request, response: Response) =>{
	const res = await service.getClubService();
	response.status(response.statusCode).json(res.body);
}