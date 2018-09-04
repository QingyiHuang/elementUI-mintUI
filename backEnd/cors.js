var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Content-type','application/json')
    res.header('Access-Control-Allow-Credentials','true');//要浏览器发送cookie
    next();
};
module.exports = allowCrossDomain