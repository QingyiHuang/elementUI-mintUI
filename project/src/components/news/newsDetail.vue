<template>
    <div class="tmpl">
        <nav-bar title="新闻详情"></nav-bar>
        <div class="news-title">
            <p v-text="newsDetail.title"></p>
            <div>
                <span>{{newsDetail.click[0].click}}次点击</span>
                <span>分类:vue2.5.11</span>
                <span>添加时间:{{newsDetail.add_time.add_time | convertDate}}</span>
            </div>
        </div>
        <div class="news-content" v-html="newsDetail.content"></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsDetail:{}, //就是为了象征性的表示其数据类型
        }
    },created(){
        //1:获取路由参数--页面跳转过来的时候 携带的query 或者params
        let id = this.$route.query.id;
        //2:拼接路由参数成为后台请求的URL
        this.$axios.get('/newsdetail?id=' + id)
        .then(res=>{
             //3:响应回来渲染页面
             this.newsDetail = res.data; 
        })
        .catch(err=>{
            console.log(err);
        })
       
    }
}

</script>
<style scoped>
.news-title p {
    color: #b82525;
    font-size: 20px;
    font-weight: bold;
}

.news-title span {
    margin-right: 26px;
}


.news-title {
    margin-top: 5px;
    border-bottom: 1px solid #b82525;
}
.tmpl{
    color: aliceblue;
}

/*主体文章的左右距离*/

.news-content {
    margin-top: 0.62rem;
    padding: 10 5;
}
</style>
