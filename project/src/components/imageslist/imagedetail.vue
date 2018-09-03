<template>
    <div class="tmpl">
        <!--nav component-->
        <nav-bar title="图片详情"></nav-bar>

        <div class="photo-title">
            <p v-text="imgInfo.title"></p>
            <span>发起日期：{{imgInfo.add_time | convertDate}}</span>
            <span>{{imgInfo.click}}次浏览</span>
            <span>多表关联</span>
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9 ">
            <li v-for="(img,index) in imgs"  :key="index"  class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <!-- <vue-preview :sliders="img"></vue-preview> -->
                 <img class="preview-img" :src="img.src" height="100" @click="$preview.open(index, imgs)">
            </li>
        </ul>
        <div class="photo-desc">
            <p v-html="imgInfo.content"></p>
        </div>
        
        <!-- 使用评论子组件 -->
        <!-- <comment :cid="pid"></comment> -->
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgInfo:'',
            imgs:'',
        }
    },
    created(){
        //获取:to="{name:'images.detail',params:{id:img._id} }"
        var _id = this.$route.params.id
        this.$axios.get('/imagedetail?id='+_id)
        .then((result) => {
            this.imgInfo=result.data
        }).catch((err) => {
            console.log(err)
        });
        this.$axios.get('/thumbnail')
        .then((res)=>{
            console.log(res.data)
            this.imgs = res.data
            this.imgs.forEach((ele)=>{
                ele.w=600,
                ele.h=400,
                ele.msrc=ele.src
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>
li {
    list-style: none;
}

ul {
    margin: 0;
    padding: 0;
}

.photo-title {
    overflow: hidden;
    color: aliceblue;
}

.photo-title,
.photo-desc {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
}
.photo-desc p[data-v-822946fa]{
    margin-top :10px;
    color: aliceblue;
    text-indent: 30px;
}
.photo-title p {
    margin-top: 10px;
    text-align: center;
    color: #fa0606;
    font-size: 20px;
    font-weight: bold;
}

.photo-title span {
    margin-right: 20px;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: 0;
}

.mui-table-view.mui-grid-view.mui-grid-9 li {
    border: 0;
}

.photo-desc p {
    font-size: 18px;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
    padding: 2 2;
}

.mui-table-view.mui-grid-view.mui-grid-9[data-v-822946fa]{
    background-color: #26282c
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    padding: 0 0;
}
</style>
