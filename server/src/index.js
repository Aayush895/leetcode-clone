import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import v0Routes from './routes/v0/index.js';
import ErrorHandler from './middlewares/ErrorHandler.js';
import { SERVER_PORT, DB_URI, DB_NAME } from './config/server.config.js';
import logger from '../logger.js';

const app = express();

const morganFormat = ':method :url :status :response-time ms';

app.use(
	morgan(morganFormat, {
		stream: {
			write: (message) => {
				const logObject = {
					method: message.split(' ')[0],
					url: message.split(' ')[1],
					status: message.split(' ')[2],
					responseTime: message.split(' ')[3]
				};
				logger.info(JSON.stringify(logObject));
			}
		}
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		methods: ['GET', 'PUT', 'DELETE', 'POST'],
		origin: ['http://localhost:5173']
	})
);

app.get('/', (req, res) => {
	return res.send({
		message: 'pong'
	});
});

app.use('/api', v0Routes);

// Custom Error Handler Middleware
app.use(ErrorHandler);

async function startServer() {
	try {
		const mongodbconnectionInstance = await mongoose.connect(
			`${DB_URI}/${DB_NAME}`
		);

		console.log(
			`MongoDB connected! DB Host: ${mongodbconnectionInstance.connection.host}`
		);

		app.listen(SERVER_PORT, () => {
			console.log(`Server is running on port ${SERVER_PORT}`);
		});
	} catch (error) {
		console.error('Failed to start server:', error);
		process.exit(1);
	}
}

startServer();
