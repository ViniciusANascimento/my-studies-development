import { findAllClubs } from "../repositories/club-repository";
import * as httpResponse from "../utils/http-helper";

export const getClubService = async ()=> {
	const data = await findAllClubs();
	const response = httpResponse.ok(data);
	return response;
}