import bcrypt from 'bcrypt';
import {
	registerUserRepo,
	findUserByCredentialsRepo
} from '../respository/auth.repo.js';

export async function registerUserService({
	username,
	email,
	fullname,
	password,
	role
}) {
	try {
		if (!username || !email || !fullname || !password || !role) {
			throw new Error('Missing required fields');
		}

		const hashPassword = await bcrypt.hash(password, 10);
		const saveUserDetails = await registerUserRepo({
			username,
			email,
			fullname,
			password: hashPassword,
			role
		});

		return saveUserDetails;
	} catch (error) {
		console.log(error);
		throw new Error('Error in registering the user');
	}
}

export async function loginUserService(username, email, password) {
	try {
		const user = await findUserByCredentialsRepo(username, email);
		if (!user) {
			throw new Error('User by the provided credentials does not exist');
		}

		const isPasswordValid = await bcrypt.compare(password, user?.password);

		if (!isPasswordValid) {
			throw new Error('Password is invalid');
		}

		return user;
	} catch (error) {
		throw new Error('Error in logging the user');
	}
}

export async function fetchUserInfoBasedOnTokenInfoService(username, email) {
	try {
		if (!username || !email) {
			throw new Error('Incoming user information was not received');
		}

		const fetchUserInfo = await findUserByCredentialsRepo(username, email);
		return fetchUserInfo;
	} catch (error) {
		throw new Error('Incoming token was invalid or not decoded properly');
	}
}
