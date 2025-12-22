import bcrypt from 'bcrypt';
import { registerUserRepo } from '../respository/auth.repo.js';

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
