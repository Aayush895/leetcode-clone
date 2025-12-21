import ApiResponseHandler from '../utils/ApiResponseHandler.js';

export function healthController(_req, res, next) {
	try {
		return res.send(
			ApiResponseHandler('Basic router apis are working fine', 200)
		);
	} catch (error) {
		return next(error);
	}
}
