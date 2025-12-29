import express from 'express';
import {
	loginUser,
	registerUser,
	verifyCookie
} from '../../../controllers/authController.js';
import { verifyIncomingAuthToken } from '../../../middlewares/AuthMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/verify-cookie', verifyIncomingAuthToken, verifyCookie);

export default router;
