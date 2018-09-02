```javascript
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
```

