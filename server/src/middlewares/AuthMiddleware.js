import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/authToken.config.js';
import ApiResponseHandler from '../utils/ApiResponseHandler.js';

export function verifyIncomingAuthToken(req, res, next) {
	const token = req.headers.authorization?.split(' ')[1];
	if (!token) {
		return ApiResponseHandler(
			'Access token required',
			401,
			undefined,
			false
		);
	}

	try {
		const decodedToken = jwt.verify(token, JWT_SECRET);
		req.user = decodedToken; // Attach the decoded token to the request object
		next();
	} catch (error) {
		next(error);
	}
}
