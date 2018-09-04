var express = require('express')
var bodyParser = require('body-parser')
var artTemplate = require('express-art-template')
var session = require('express-session')
var path = require('path')
var mongoose = require('mongoose')
// var corsHeader = require('./cors').allowCrossDomain
mongoose.connect('mongodb://localhost/hqy2',{ useNewUrlParser: true })

var router = require('./router')

var app = express()
//app使用白名单
var allowCrossDomain = require('./cors')

app.use(allowCrossDomain)
// app.use(corsHeader)
//body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//默认视图路径
app.set('views',path.join(__dirname,'./views'))
//暴露资源
app.use('/public',express.static(path.join(__dirname,'./public')))
//默认模板引擎
app.engine('html',artTemplate)
//处理cookie
app.use(session({
    /**
     * 1配置加密字符串，他会在原有加密的基础上和这个字符串拼起来去加密，防止客户端伪造
     * 2
     * 3无论是否session 都会分配钥匙
     */
    secret:'hqy',
    resave:false,
    saveUninitialized:true
}))

//app使用路由
app.use(router)

app.listen(3000,function(){
    console.log('server is running on port 3000')
})
