function ApiResponseHandler(message, code, data) {
	const responseObj = {
		success: true,
		status: code,
		response: data || '',
		message: message,
		timestamp: new Date().toISOString()
	};

	return responseObj;
}

export default ApiResponseHandler;
