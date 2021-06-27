import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class ListTagService {

	async execute() {
		const tagsRepositories = getCustomRepository(TagsRepositories);


		// Using Class-tranformer library - Insert this block of code at the entity
		/**
		 * 	@Expose({name: "name_custom"})
				nameCustom(): string{
				return `#${this.name}`;
				}
		 */
		const tagList = await tagsRepositories.find();

		return classToPlain(tagList);

		// Simple way without any library to add a new custom field in the return object
		// let tagList = await tagsRepositories.find();

		// tagList = tagList.map(tag =>(
		// 	{...tag, custom_name: `#${tag.name}`}
		// ));

		// return tagList;
	}

}

export { ListTagService };