import jwt from 'jsonwebtoken';
import { JWT_SECRET, EXPIRE } from '../config/authToken.config.js';

export function generateToken(userDetails) {
	return jwt.sign(
		{
			userDetails: {
				id: userDetails?._id,
				email: userDetails?.email,
				username: userDetails?.username
			}
		},
		JWT_SECRET,
		{ expiresIn: EXPIRE }
	);
}
