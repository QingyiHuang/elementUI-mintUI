var mongoose =require('mongoose')
var md5 =require('blueimp-md5')
var Schema = mongoose.Schema

var userSchema = new Schema({
    avatar:{
        type:String,
        default:'http://localhost:3000/public/img/20180505143841_kzmNr.jpeg'
    },
    username:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:Number,
        trim:true,
    },
    introduction:{
        type:String,
        trim:true
    },
    birthday:{
        type:String,
    },
    meta:{
        createAt:{
            type:Date,
            default:Date.now
        },
        updateAt:{
            type:Date,
            default:Date.now
        }
    },
    pow:{
        type:Number,
        default:'0',//普通人0  会员1 管理员2
        enum:[0,1,2]
    }
})
userSchema.statics = {
    findAll:function(cb){
        return this
            .find({})
            .exec(cb)
    }
}
var User = mongoose.model('user',userSchema)

exports.User = User