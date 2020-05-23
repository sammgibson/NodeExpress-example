let createError = require('http-errors');

exports.isLoggedIn = function(req, res, next){
    if(req.user)
        next();
    else
        next(createError(404, "page does not exist."));
}

exports.hasAuth = function(req, res, next){
    if (req.user && req.user.is_admin == true){
        next();
    }else{
        console.log("IS ADMIN??????????",req.user.is_admin);
        next(createError(404, "Page does not exist"));
    }
}