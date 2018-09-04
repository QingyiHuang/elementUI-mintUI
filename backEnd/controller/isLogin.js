var isLogin = function(req,res,next){

    var user = req.session.user

	if(!user){
		return res.redirect('/signin')
	}
	next()
}
// function(req,res,next){
//     //拿到session里的user
//     var _user = req.session.user;
//     app.locals.user = _user;
//     return next();
// }