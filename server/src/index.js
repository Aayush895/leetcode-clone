import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import v0Routes from './routes/v0/index.js';
import ErrorHandler from './middlewares/ErrorHandler.js';
import { SERVER_PORT } from './config/server.config.js';
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

app.listen(SERVER_PORT, () => {
	console.log(`Server is running on port ${SERVER_PORT}`);
});
