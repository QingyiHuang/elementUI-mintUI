var expess = require('express')
var md5 = require('blueimp-md5')
var router = expess.Router()
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

//引入model
var Lunbo = require('./models/lunbo')
var NewsList = require('./models/new').Newslist
var NewsDetail = require('./models/new').NewsDetail
var Category = require('./models/category').category
var Imagelist = require('./models/imagelist').imagelist

/* 后台首页 */
router.get('/',function(req,res){
    res.render('index.html',{
        backTitle:'后台',
        backEnds:[
            {title:"Vue2 buyandNews app server backEnd-----img_category",detail:"/imgcategory"},
            {title:"Vue2 buyandNews app server backEnd-----img_list",detail:"/imglist"},
            {title:"Vue2 buyandNews app server backEnd-----news",detail:"/newslist"},
            {title:"Vue2 buyandNews app server backEnd-----news_detail",detail:"/newsdetail"},
            {title:"Vue2 buyandNews app server backEnd-----buy",detail:"buylist_api"},
            {title:"Vue2 buyandNews app server backEnd-----lunbo",detail:"/lunbo"}
        ]
    })
})

/* 后台轮播 */
router.get('/lunbo',function(req,res){
    Lunbo.find({},function(err,data){
        if(err){
            res.status(500).json({err_code:500,message:'server error'})
        }else if(data){
            res.setHeader('Content-type','application/json')
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.send(JSON.stringify(data,undefined,2))
            res.end()
        }
    })
})

//新闻list页面
router.get('/newslist',function(req,res){
    NewsList.find({},function(err,data){
        if(err){
            res.status(500).json({err_code:500,message:'server error'})
        }else if(data){
            res.setHeader('Content-type','application/json')
            res.setHeader("Access-Control-Allow-Origin", "*")
            res.send(JSON.stringify(data,undefined,2))
            res.end()
        }
    })
})

/*新闻详情页面 */
router.get('/newsdetail',function(req,res){
    var id = req.query.id
    NewsDetail.findById({_id:id}).populate({path:'click',select:'click'})
    .populate({path:'add_time',select:'add_time'})
    .exec()
    .then(function(data){
        res.setHeader('Content-type','application/json')
        res.setHeader("Access-Control-Allow-Origin", "*")
        res.send(JSON.stringify(data,undefined,2))
        res.end()
    })
    .catch(function(err){
        res.status(500).json({err_code:500,message:'server error'})
    })
})

/*图片分类 */
router.get('/imgcategory',function(req,res){
    Category.find({})
        .then(function(data){
            res.setHeader('Access-Control-Allow-Origin','*')
            res.setHeader('Content-type','application/json')
            res.send(JSON.stringify(data,undefined,2))
            res.end()
        })
        .catch(function(err){
            res.status(500).json({err_code:500,message:'server error'})
        })
})
/*图片展示页面 根据categories*/
router.get('/imglist',function(req,res){
    console.log(req.query.id)
    var id = req.query.id
    if(id==0){
        Imagelist.find({})
        .then(function(data){
            res.setHeader('Access-Control-Allow-Origin','*')
            res.setHeader('Content-type','application/json')
            res.send(JSON.stringify(data,undefined,2))
            res.end()
        }).catch((err)=>{
            console.log(err)
        })
    }else{
        Category.findById({_id:id})
        .populate({path:'list',select:'title click add_time content image_url'})
        .exec()
        .then(function(data){
            res.setHeader('Access-Control-Allow-Origin','*')
            res.setHeader('Content-type','application/json')
            res.send(JSON.stringify(data,undefined,2))
            res.end()
        })
    }
})









module.exports = router