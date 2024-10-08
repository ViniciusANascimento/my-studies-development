import cors from "cors";
import express from "express";
import rounter from "./routes/routes";

function createApp (){

	const app = express();

	app.use(express.json());
	app.use("/api",rounter)
	app.use(cors())
	return app;
}

export default createApp;