import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService{

	async execute(user_id: string){
		const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

		const compliments = await complimentsRepositories.find({
			where: {
				user_sender: user_id,
			},
			// to get more data that is availble on the specific repository
			relations: ["userSender", "userReceiver"],
		});

		return compliments;
	}
}

export { ListUserSendComplimentsService }