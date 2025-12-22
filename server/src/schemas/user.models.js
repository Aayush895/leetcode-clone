import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			index: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		fullname: {
			type: String,
			required: true,
			lowercase: true,
			index: true
		},
		password: {
			type: String,
			required: true
		},
		role: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

export const User = mongoose.model('User', userSchema);
