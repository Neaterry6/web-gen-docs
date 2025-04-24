const rateLimit = {};

exports.isRateLimited = (userId) => {
    if (!rateLimit[userId]) rateLimit[userId] = { count: 0, timestamp: Date.now() };
    
    const elapsedTime = Date.now() - rateLimit[userId].timestamp;
    if (elapsedTime > 60000) {
        rateLimit[userId] = { count: 0, timestamp: Date.now() };
    }
    
    rateLimit[userId].count++;
    return rateLimit[userId].count > 100; // Limit to 100 requests per minute
}
