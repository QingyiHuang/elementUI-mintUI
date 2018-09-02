var expess = require('express')
var app = expess()
var md5 = require('blueimp-md5')
var router = expess.Router()
var path = require('path')
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

//引入model
var Lunbo = require('./models/lunbo')
var NewsList = require('./models/new').Newslist
var NewsDetail = require('./models/new').NewsDetail
var Category = require('./models/category').category
var Imagelist = require('./models/imagelist').imagelist

//引入功能
var upload = require('./controller/fileUpload/multerUtil')

/* 后台首页 */
router.get('/',function(req,res){
    res.render('index.html',{
        backTitle:'后台',
        backEnds:[
            {title:"功能区-------------------------------图片上传",detail:"----/upload"},
            {title:"api区域------------------------------图片分类",detail:"----/imgcategory"},
            {title:"api区域------------------------------图片详情",detail:"----/imglist"},
            {title:"api区域------------------------------新闻列表",detail:"----/newslist"},
            {title:"api区域------------------------------新闻详情",detail:"----/newsdetail"},
            {title:"api区域------------------------------购物车",detail:"----buylist_api"},
            {title:"api区域------------------------------轮播",detail:"----/lunbo"},
            {title:"api区域------------------------------缩略图",detail:"----/thumbnail"},
            {title:"api区域------------------------------缩略图详情",detail:"----/thumbnaildetail"},
            {title:"api区域------------------------------轮播",detail:"----/lunbo"},
            {title:"api区域------------------------------轮播",detail:"----/lunbo"},
        ]
    })
})
/*--------------------------------功能后台区域-----------------------------------*/

/*上传文件*/
router.get('/upload',function(req,res){
    res.render('upload.html')
})
router.post('/upload', upload.single('image'), function (req, res,cb) {
    if (req.file) {

            //filePath: 'uploads/' + path.basename(req.file.path)

        return res.status(200).json({
            err:null,
            filePath:'email or password is invalid'
        })
        console.log(req.file);
    }
})


/*页面api------------------------------------------------------------------------ */
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

/*缩略图 缩略图详情 */
router.get('/thumbnail',function(req,res){

})









module.exports = router