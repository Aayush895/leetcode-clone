import ApiResponseHandler from '../utils/ApiResponseHandler.js';
import { registerUserService } from '../services/auth.service.js';

export async function registerUser(req, res, next) {
	try {
		const { username, email, fullname, password, role } = req.body;
		const serviceResponse = await registerUserService({
			username,
			email,
			fullname,
			password,
			role
		});

		return res.send(
			ApiResponseHandler(
				'User registered successfully',
				200,
				serviceResponse,
				true
			)
		);
	} catch (error) {
		next(error);
	}
}
