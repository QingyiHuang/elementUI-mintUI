var mongoose =require('mongoose')
var Schema = mongoose.Schema

var categorySchema = new Schema({
    title:{
        type:String,
        required:true
    },
    list:[{
        type:Schema.Types.ObjectId,ref:'imagelist'
    }]
})
var category = mongoose.model('category',categorySchema)
exports.category = category