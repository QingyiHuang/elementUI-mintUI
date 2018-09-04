var mongoose = require('mongoose')
var User = require('./comment').User
var Post = require('./comment').Post
var Comment = require('./comment').Comment
mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true })
mongoose.Promise = require('bluebird');
//var Promise = mongoose.Promise
//realize
var andy = new User({
    name:'adny',
    age:20
})
var tip = new Post({
    title:'中国',
    content:'need more time'
})
var newComment = new Comment({
    content:'评论string'
})
/*
//save
andy.save()
    .then(function(user){
        tip.author = user
        newComment.author = user //产生关联
        //执行存储
        return Promise.all([tip.save(),newComment.save(),user])
    })
    //spread 的作用是把 all 执行后的结果分散开
    .spread(function(tip,comment,user){
        user.posts.push(tip)
        user.comments.push(comment)
        tip.comments.push(comment)
        return Promise.all([user.save(),tip.save()])
    })
    .spread(function(){
        console.log('success')
    }).catch(function(err){
        console.log(err)
    })

    //填充populate*/
    /*User.find().populate({path:'posts',select:'title'})
        .exec().then(function(user){
            console.log(user)
        })
        .catch(function(err){
            console.log(err)
        })*/

        User.findOne({name:'adny'}).populate({path:'comments', select: 'content'})
        .exec().then(function(user) {
        console.log(user);
        }).catch(function(reason) {
        console.log(reason);
        });