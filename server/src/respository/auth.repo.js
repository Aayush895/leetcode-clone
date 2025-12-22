import { User } from '../schemas/user.models.js';

export async function registerUserRepo({ username, email, fullname, password, role }) {
	try {
		const doesUserAlreadyExist = await User.findOne({
			$or: [{ username }, { email }]
		});

		if (doesUserAlreadyExist) {
			throw new Error('User already exists, please log in');
		}

		const registerUser = await User.create({
			username,
			email,
			fullname,
			password,
			role
		});

		return registerUser;
	} catch (error) {
		throw new Error('Error in creating the user in the DB!');
	}
}
