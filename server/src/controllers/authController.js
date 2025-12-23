import ApiResponseHandler from '../utils/ApiResponseHandler.js';
import {
	registerUserService,
	loginUserService
} from '../services/auth.service.js';
import { generateToken } from '../utils/generateWebToken.js';

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

export async function loginUser(req, res, next) {
	try {
		const { username, email, password } = req.body;
		const serviceResponse = await loginUserService(
			username,
			email,
			password
		);

		const token = generateToken(serviceResponse);

		res.cookie('token', token, {
			httpOnly: true,
			sameSite: 'Strict',
			maxAge: 3600000
		});

		return res.send(
			ApiResponseHandler(
				'User logged in successfully',
				200,
				serviceResponse,
				true
			)
		);
	} catch (error) {
		next(error);
	}
}
