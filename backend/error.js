exports.errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    res.status(err.status || 200).json({
        success: false,
        success: error.message || 'Server Error'
    })
}