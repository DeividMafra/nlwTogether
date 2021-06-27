import { Request, response, Response } from "express";
import { CreateTagService } from "../services/CreateTagService";

class CreateTagController {
	async handle(req: Request, resp: Response) {
		const { name } = req.body;

		const createTagService = new CreateTagService();

		const tag = await createTagService.execute(name);

		return resp.json(tag);
	}
}

export { CreateTagController }