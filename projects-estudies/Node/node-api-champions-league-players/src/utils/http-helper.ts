import HttpResponse from "../models/http-response-model";
import { StatusCode } from "./status-code";

export const ok = async (data:any):Promise<HttpResponse> => {
	return {
		statusCode: StatusCode.OK,
		body: data}
}

export const noContent = async ():Promise<HttpResponse> =>{
	return{
		statusCode: StatusCode.NO_CONTENT,
		body: null
	}
}

export const badRequest = async ():Promise<HttpResponse> =>{
	return{
		statusCode: StatusCode.BAD_REQUEST,
		body: null
	}
}

export const created = async ():Promise<HttpResponse> =>{
	return{
		statusCode: StatusCode.CREATED,
		body: "successful",
	}
}