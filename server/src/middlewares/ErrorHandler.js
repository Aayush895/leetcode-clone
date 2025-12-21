function ErrorHandler(err, _req, res, _next) {
	const errorStatus = err.statusCode || 500;
	const errorMsg = err.message || 'Something went wrong';
	return res.status(errorStatus).json({
		success: false,
		status: errorStatus,
		message: errorMsg || 'Internal Server Error',
		code: err.statusCode,
		stack: err.stack || {},
		timestamp: new Date().toISOString()
	});
}

export default ErrorHandler;
