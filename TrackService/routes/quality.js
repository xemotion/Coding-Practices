var express = require('express');
var router = express.Router();


module.exports = function(options){
    return function(req, res, next){
        next()
    }
}

module.exports = router;
