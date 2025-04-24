exports.successResponse = (res, message, data = {}) => {
    res.status(200).json({ success: true, message, data });
};

exports.errorResponse = (res, message) => {
    res.status(400).json({ success: false, message });
}
