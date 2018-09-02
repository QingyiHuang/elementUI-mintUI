var mongoose = require('mongoose')
var Schema = mongoose.Schema

var imagedetailSchema = new Schema({
    info:{type:Schema.Types.ObjectId,ref:'imagelist'},
    thumbnail:[{
        type:Schema.Types.ObjectId,
        ref:'thumbnail'
    }],
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
    
})
imagedetailSchema.statics = {

	//联合查询静态方法
    findWithThumbnail:function(cb){
        return this
            .find({})
            .populate('info')
            .populate('thumbnail')
            .exec(cb)
    }
}

module.exports = mongoose.model('image_detail',imagedetailSchema)