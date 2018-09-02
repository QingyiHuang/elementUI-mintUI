var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/hqy2',{ useNewUrlParser: true })
mongoose.Promise = require('bluebird')
var imagelist = require('./imagelist').imagelist
var category = require('./category').category


// var c1 = new category({
//     title:"黑暗童话"
// })
// var imglist = new imagelist({
//     title:"黑暗童话",
//     click:3,
//     content:"大公爵的“阴谋”破产，他和灰姑娘的后妈、两个姐姐一起被逐出王国，再也不许回来。王子和灰姑娘从此过着幸福的生活。灰姑娘跟着王子离开时，扭头对一脸丧气的后妈说了句：“我原谅你。”",
//     image_url:"http://localhost:3000/public/img/th1.jpg"
// })
// imglist.save()
//     .then(function(imglist){
//         c1.list.push(imglist)
//         return Promise.all([c1.save(),imglist])
//     })
//     .spread(function(){
//         console.log('success')
//     }).catch(function(err){
//         console.log(err)
//     })
//在同一个category中 新增imagelist 
// var imglist = new imagelist({
//     title:"《爱丽丝梦游仙境》",
//     click:12,
//     content:"爱丽丝成为预言书中众望所归的女英雄，她无可选择地肩负起击败红桃皇后的使命，在“疯帽匠”、三月兔、妙妙猫等正义之师的帮助下，笨拙地挥舞起宝剑，砍掉了貌似强大的巨龙头颅，瞬间瓦解了独裁政权的恐怖统治。",
//     image_url:"http://localhost:3000/public/img/th9.jpg"
// })
// imglist.save()
//         .then(function(imglist){
//             return Promise.all([category.findOne({title:'黑暗童话'}),imglist])
//         })
//         .spread(function(cat,imglist){
//             cat.list.push(imglist)
//             return cat.save()
//         })
//         .then(function(cat){
//             console.log(cat)
//             console.log('success')
//         })
//         .catch(function(err){
//             console.log(err)
//         })

/**新建分类 */
// var fenlei =['二次元','动漫','直播','复活','社会','新学期','土间埋','成长']
// for(let i of fenlei){
//     new category({
//         title:i
//     }).save()
//     .then(function(data){
//         console.log(data)
//     })
// }
