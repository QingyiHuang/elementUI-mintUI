var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ImageSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    click:{
        type:Number,
        default:0
    },
    add_time:{
        type:String,
        default:Date.now
    },
    content:{
        type:String,
        default:"未添加描述"
    },
    image_url:{
        type:String,
        default:"20160222184301_tBiRH.thumb.700_0.jpeg"
    },
    image_detail:{
        type:Schema.Types.ObjectId,ref:'image_detail'
    }
})
var imagelist = mongoose.model('imagelist',ImageSchema)
exports.imagelist = imagelist