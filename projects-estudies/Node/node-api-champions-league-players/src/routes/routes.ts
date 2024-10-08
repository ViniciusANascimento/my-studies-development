import { Router } from "express";
import * as ClubController from "../controllers/clubs-controller";
import * as PlayerController from "../controllers/players-controller";

const rounter = Router();

rounter.get("/players",PlayerController.getPlayers);
rounter.post("/players",PlayerController.postPlayer)
rounter.delete("/players",PlayerController.deletePlayer);
rounter.patch("/players/:id",PlayerController.updatePlayer);
rounter.get("/players/:id",PlayerController.getPlayerById);

rounter.get("/clubs",ClubController.getClubs);

export default rounter;