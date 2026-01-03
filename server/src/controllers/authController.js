import ApiResponseHandler from '../utils/ApiResponseHandler.js';
import {
	registerUserService,
	loginUserService,
	fetchUserInfoBasedOnTokenInfoService
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
			sameSite: 'Lax',
			secure: false,
			maxAge: 60 * 60 * 1000 // 15 min expiry
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

export async function verifyCookie(req, res, next) {
	try {
		const incomingUserInfo = req?.user;
		if (!incomingUserInfo.userDetails) {
			return res.send(
				ApiResponseHandler(
					'Incoming token is not valid',
					401,
					'',
					false
				)
			);
		}

		const fetchUserInfoBasedOnTokenInfo =
			await fetchUserInfoBasedOnTokenInfoService(
				incomingUserInfo.userDetails.username,
				incomingUserInfo.userDetails.email
			);

		return res.send(
			ApiResponseHandler(
				'Valid cookie',
				200,
				{
					isCookieValid: true,
					userInfo: fetchUserInfoBasedOnTokenInfo
				},
				true
			)
		);
	} catch (error) {
		next(error);
	}
}
