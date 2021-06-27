import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { RepositoryNotFoundError } from "typeorm";

interface IPayload{
	sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

	// Get token from header request
	const authToken = request.headers.authorization;

	// Check if token is filled properly
	if (!authToken) {
		return response.status(401).end();
	}

	// Descarting the 'Bearer ' word from the token
	const [, token] = authToken.split(" ");

	// Check if token is valid
	try {
		const { sub } = verify(
			token,
			process.env.JWT_SALT
		) as IPayload;

		request.user_id = sub;

		return next();
	} catch (err) {
		return response.status(401).end();
	}
}