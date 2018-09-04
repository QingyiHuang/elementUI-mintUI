var expess = require('express')
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
var Thumbnail = require('./models/thumbnail')
var User = require('./models/user').User

//引入功能
var upload = require('./controller/fileUpload/multerUtil')

/* 后台首页 */
router.get('/',function(req,res){
    res.render('index.html',{
        backTitle:'后台',
        backEnds:[
            {title:"后台功能区-------------------------------图片上传",detail:"----/upload"},
            {title:"api区域------------------------------登录",detail:"----/login"},
            {title:"api区域------------------------------注册",detail:"----/register"},
            {title:"api区域------------------------------图片分类",detail:"----/imgcategory"},
            {title:"api区域------------------------------图片list",detail:"----/imglist"},
            {title:"api区域------------------------------图片详情",detail:"----/imagedetail"},
            {title:"api区域------------------------------新闻列表",detail:"----/newslist"},
            {title:"api区域------------------------------新闻详情",detail:"----/newsdetail"},
            {title:"api区域------------------------------购物车",detail:"----buylist_api"},
            {title:"api区域------------------------------轮播",detail:"----/lunbo"},
            {title:"api区域------------------------------缩略图",detail:"----/thumbnail"},
            {title:"api区域------------------------------缩略图详情",detail:"----/thumbnaildetail---------停用"},

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

/*注册 */
router.post('/register',function(req,res){
    var reqBody = req.body
    User.findOne({
        $or : [{username:reqBody.username},{email:reqBody.email}]
    })
    .then(function(err,data){
        if(err){
            return res.status(500).json({err_code:500,message:'服务器错误'})
        }else if(data){
            return res.status(200).json({err_code:1,message:'邮箱或者用户名已经存在'})
        }else{
            reqBody.password=md5(reqBody.password)//加密
            new User({reqBody}).save(function(err,user){
                if(err){
                    return res.status(500).json({err_code:500,message:'存储过程发生错误'})
                }else{//为用户请求session对象添加挂载属性然后给用户拿去用
                    req.session.user=user
                    res.status(200).json({err_code:0,message:'注册成功',userinfo:user})
                }
            })
        }
    })
})
/*登录 */
router.post('/login',function(req,res){
    var reqBody = req.body
    User.findOne({
        username:reqBody.username,
        password:md5(reqBody.password)
    })
    .then(function(err,data){
        if(err){
            return res.status(500).json({
                err_code:500,
                message:err.message
            })
        }else if(!data){
            return res.status(200).json({
                err_code:1,
                message:'email or password is invalid'
            })
        }else{
            req.session.user = data
            res.status(200).json({
                err_code:0,
                message:'登陆成功',
                userinfo:data
            })
        }
    })
})


/*页面api------------------------------------------------------------------------ */
/* 后台轮播 */
router.get('/lunbo',function(req,res){
    Lunbo.find({},function(err,data){
        if(err){
            res.status(500).json({err_code:500,message:'server error'})
        }else if(data){
            res.setHeader('Content-type','application/json')
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
            res.send(JSON.stringify(data,undefined,2))
            res.end()
        }
    })
})

/*新闻详情页面 ---------------------------------------------------------------click*/
router.get('/newsdetail',function(req,res){
    var id = req.query.id
    NewsDetail.findById({_id:id}).populate({path:'click',select:'click'})
    .populate({path:'add_time',select:'add_time'})
    .exec()
    .then(function(data){
        res.setHeader('Content-type','application/json')
        res.send(JSON.stringify(data,undefined,2))
        res.end()
    })
    .catch(function(err){
        res.status(500).json({err_code:500,message:'server error'})
    })
    // .then(function(data){
    //     var _id = data.click[0]._id
    //     NewsList.findById({id:_id},function(err,newlist){
    //         console.log(newlist)
    //     })
    //     res.setHeader('Content-type','application/json')
    //     res.send(JSON.stringify(data,undefined,2))
    //     res.end()
    // })

    // .spread(function(newlist,data){
    //     console.log(newlist.click)
    //     // return Promise.all([newlist.save(),data])
    // })
    // .spread(function(newlist,data){
    //     res.setHeader('Content-type','application/json')
    //     res.send(JSON.stringify(data,undefined,2))
    //     res.end()
    // })

})

/*图片分类 */
router.get('/imgcategory',function(req,res){
    Category.find({})
        .then(function(data){
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
            res.setHeader('Content-type','application/json')
            res.send(JSON.stringify(data,undefined,2))
            res.end()
        })
    }
})

/*图片详情 */
router.get('/imagedetail',function(req,res){
    let id = req.query.id
    Imagelist.findById({_id:id})
        .then(function(data){
            res.setHeader('Content-type','application/json')
            res.send(JSON.stringify(data,undefined,2))
            res.end()
        })
})

/* thumbnail详情页面 ------逻辑出现问题-----------------------------------------------需要维护 用list内容替代*/
// router.get('/imgdetail',function(req,res){
//     console.log(req.query)
//     let id = req.query.id
//     Imagelist.findById({_id:id})
//     .populate({path:'image_detail',select:''})
// })


/*缩略图 缩略图详情 */
router.get('/thumbnail',function(req,res){
    Thumbnail.find({})
        .exec()
        .then(function(data){
            res.setHeader('Content-type','application/json')
            res.send(JSON.stringify(data,undefined,2))
            res.end()
        })
})











module.exports = router