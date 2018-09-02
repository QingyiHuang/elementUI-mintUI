var mongoose = require('mongoose')
var Schema = mongoose.Schema

var lunboSchema = new Schema({
    url:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('lunbo',lunboSchema)
/*var addLunbo =  mongoose.model('lunbo',lunboSchema)
var json = [
    {
        url:"https://blog.csdn.net/h_qingyi",
        img:"http://localhost:3000/public/img/timg.jpg"
    },
    {
        url:"https://blog.csdn.net/h_qingyi",
        img:"http://localhost:3000/public/img/timg(1).jpg"
    },
    {
        url:"https://blog.csdn.net/h_qingyi",
        img:"http://localhost:3000/public/img/timg(2).jpg"
    },
    {
        url:"https://blog.csdn.net/h_qingyi",
        img:"http://localhost:3000/public/img/timg(3).jpg"
    }
]
for (let key in json){
    new addLunbo({
        url:json[key].url,
        img:json[key].img
    }).save()
}*/
