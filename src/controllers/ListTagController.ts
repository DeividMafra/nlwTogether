import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";


class ListTagController{
	async handle( request: Request, response: Response){

		const listTagService = new ListTagService();

		let tagList = await listTagService.execute();

		return response.json(tagList);
	}

}

export { ListTagController };