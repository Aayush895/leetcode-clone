function ApiResponseHandler(message, code, data, success = false) {
	const responseObj = {
		success,
		status: code,
		response: data || '',
		message: message,
		timestamp: new Date().toISOString()
	};

	return responseObj;
}

export default ApiResponseHandler;
