import fs from "fs/promises";
import { ClubModel } from "../models/club-model";

export const findAllClubs = async (): Promise<ClubModel[]> =>{
	const database = await fs.readFile("./src/data/clubs.json","utf-8")
	const clubs: ClubModel[] = JSON.parse(database);
	return clubs;
}