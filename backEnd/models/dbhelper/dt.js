var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/hqy2',{useNewUrlParser:true})
var imagedetail = require('../imagedetail')
var thumbnail = require('../thumbnail')
var imagelist = require('../imagelist').imagelist

imagelist.find({})
        .then(function(list){
            console.log(list)
        }).catch(function(err){
            console.log(err)
        })