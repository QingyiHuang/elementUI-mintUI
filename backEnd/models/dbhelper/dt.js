var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/hqy2',{useNewUrlParser:true})
var imagedetail = require('../imagedetail')
var thumbnail = require('../thumbnail')
var imagelist = require('../imagelist').imagelist

var json = [
    {src:'http://localhost:3000/public/img/20120517185824_JTXWR.thumb.700_0.jpeg'},
    {src:'http://localhost:3000/public/img/20140429100630_vAFQr.thumb.700_0.jpeg'},
    {src:'http://localhost:3000/public/img/20150516230201_B3uHm.thumb.700_0.jpeg'},
]
// for(let i in json){
//     new thumbnail({
//         src:json[i].src
//     }).save()
// }

var detail = new imagedetail({
})


//为了简便仅仅添加同一个数据实现了这个三重关联
// imagelist.find({})
//         .then(function(list){
//             return Promise.all([detail.save(),list])
//         })
//         .spread(function(detail,list){
//             for(let i in list){
//                 list[i].image_detail=detail
//                 list[i].save()
//             }
//         })
//         .then(function(){
//             console.log('yes')
//         }).catch((err)=>{
//             console.log(err)
//         })