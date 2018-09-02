//分为title 和详情页面
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
var Schema = mongoose.Schema
//mongoose.connect('mongodb://localhost/hqy2',{ useNewUrlParser: true })
/**
 * 结构  新闻表  新闻详情表
 */
var newListSchema = new Schema({
    title:{
        type:String
    },
    add_time:{
        type:String,
        default:Date.now
    },
    zhaiyao:{
        type:String
    },
    click:{
        type:Number
    },
    img_url:{
        type:String,
        default:"http://www.localhost:3000/public/img/20180505143841_kzmNr.jpeg"
    },
    news_detail:[
        {type:Schema.Types.ObjectId, ref:'newsdetail'}
    ]
})
var newslist = mongoose.model('newslist',newListSchema)
var newsDetailSchema = new Schema({
    title:{
        type:String,
    },
    content:{
        type:String,
        required:true
    },
    click:[
        {type:Schema.Types.ObjectId,ref:'newslist'}
    ],
    add_time:[
        {type:Schema.Types.ObjectId,ref:'newslist'}
    ],
    news_list:[
        {type:Schema.Types.ObjectId,ref:'newslist'}
    ]
})
var newsdetail = mongoose.model('newsdetail',newsDetailSchema)

exports.Newslist = newslist
exports.NewsDetail = newsdetail
/*var new1 = new newslist({
    title:'React native',
    zhaiyao:'React native 是react 编写的框架',
    click:0,
    img_url:"http://www.localhost:3000/public/img/20171006203245_ciN2H.jpeg",
})
var detail1 = new newsdetail({
    title:'React native',
    content:`很久之前就想研究React Native了，但是一直没有落地的机会，我一直认为一个技术要有落地的场景才有研究的意义，刚好最近迎来了新的APP，在可控的范围内，我们可以在上面做任何想做的事情。

    PS：任何新技术的尝鲜都一定要控制在自己能控制的范围内，失败了会有可替换方案，不要引起不可逆的问题，这样会给团队造成灾难性的后果。
    
    事实上，RN经过一段时间发展，已经有充分数量的人尝试过了，就我身边就有几批，褒贬也不一：
    
    ① 做UI快
    
    ② 还是有很多限制，不如原生Native
    
    ③ 入门简单，能让前端快速开发App
    
    ④ iOS&Android大部分代码通用
    
    ⑤ code-push能做热更新，但是用不好依旧坑`
})
new1.save()
    .then(function(new1){
        detail1.click = new1
        detail1.add_time = new1
        return Promise.all([detail1.save(),new1])
    })
    .spread(function(detail1,new1){
        new1.news_detail = detail1
        detail1.news_list = new1
        return Promise.all([new1.save(),detail1.save()])
    })
    .spread(function(){
        console.log('success')
    }).catch(function(err){
        console.log(err)
    })*/