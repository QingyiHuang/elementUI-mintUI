var mongoose = require('mongoose')
var Schema = mongoose.Schema
mongoose.Promise = require('bluebird')

var thumbnailSchema =new Schema({
    src:{
        type:String,
    }
})
module.exports = mongoose.model('thumbnail',thumbnailSchema)