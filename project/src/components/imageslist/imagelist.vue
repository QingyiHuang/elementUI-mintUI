<template>
    <div class="tmpl">
        <nav-bar title="图片页面"></nav-bar>
        <div class="photo-header">
            <ul>
                <li v-for="category in categories" :key="category.id">
                    <a href="javascript:;" @click="loadImg(category._id)">{{category.title}}</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
             <ul>
                <li v-for="img in imgs" :key="img.id">
                    <router-link :to="{name:'photo.detail',params:{id:img.id} }">
                         <img :src="img.image_url">
                        <p>
                            <span v-text="img.title"></span>
                            <br>
                            <span v-text="img.content"></span>
                        </p>
                    </router-link>
                </li>
            </ul> 
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            categories:[],//分类
            imgs:[], //图片数据
        }
    },
    created(){
        this.$axios.get('/imgcategory')
                .then((res)=>{
                    this.categories = res.data
                    this.categories.unshift({
                        _id:0,
                        title:"全部",
                    })
                }).catch((err)=>{
                    console.log(err)
                })
    },
    mounted(){
        //console.log(this.imgs)
    },
    methods:{
        loadImg:function(id){
            if(id ==0){
                this.$axios.get('/imglist?id='+id)
                        .then((res)=>{
                            this.imgs = res.data
                        })
                        .catch((err)=>{
                            console.log(err)
                        })
            }else{
                this.$axios.get('/imglist?id='+id)
                        .then((res)=>{
                            this.imgs = res.data.list
                        })
                        .catch((err)=>{
                            console.log(err)
                        })
            }
        }
    }
}



</script>
<style>
.photo-header li {
    list-style: none;
    display: inline-block;
    margin-left: 10px;
    height: 30px;
}
.photo-header li>a{
    color: aliceblue;
}
.photo-header li>a:active{
    color: red;
}
.photo-header ul {
    /*强制不换行*/
    white-space: nowrap;
    overflow-x: auto;
    padding-left: 0px;
    margin: 5;
}


/*下面的图片*/

.photo-list li {
    list-style: none;
    position: relative;
}

.photo-list li img {
    width: 100%;
    height: 230px;
    vertical-align: top;
}

.photo-list ul {
    padding-left: 0px;
    margin: 0;
}

.photo-list p {
    position: absolute;
    bottom: 0px;
    color: white;
    background-color: rgba(0, 0, 0, 0.3);
    margin-bottom: 0px;
}

.photo-list p span:nth-child(1) {
    font-weight: bold;
    font-size: 16px;
}

/*图片懒加载的样式*/
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}

</style>
