<template>
    
    <div>
        <!--轮播-->
        <mt-swipe class="define-swipe" :auto="4000">
            <mt-swipe-item v-for="(img,index) in imgs" :key="index">
                <a :href="img.url">
                    <img :src="img.img" alt="img">
                </a>
            </mt-swipe-item>
        </mt-swipe>

        <!--9宫格子-->
		<div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <!--新闻-->
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link :to="{name:'news.list'}">
		                    <span class="mui-icon icon-guanli"></span>
		                    <div class="mui-media-body">Mongo多表</div>
                        </router-link>
                    </li>
                    <!--comments-->
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-compose"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">评论</div></a></li>
		            <!--图片-->
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link :to="{name:'images.list'}">
		                    <span class="mui-icon mui-icon-image"></span>
		                    <div class="mui-media-body">精彩图文</div>
                        </router-link>
                    </li>
                    <!--购物车-->
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon icon-gaiicon-"></span>
		                    <div class="mui-media-body">vuex购物车</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
		</div>
        
    </div>
</template> 
<script>
    export default{
        data(){
            return{
                imgs:''
            }
        },
        created(){
            var that = this
            this.$axios.get('/lunbo')
            .then((result) => {
                that.imgs=result.data
            }).catch((err) => {
                console.log(err)
            });
        }
    }
</script>
<style scoped>
    .define-swipe{
        height: 188px;
        max-height: 188px;
    }
    .define-swipe img{
        height: 100%;
        width: 100%;
    }
    /*九宫格*/
    .mui-grid-view.mui-grid-9{
        background-color: #212124;
        border: 0;
        margin-top: 0 px;
        
    }
    .mui-grid-view.mui-grid-9 li{
        border: 0;
        color:#fff;
    }
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    color: #fff;
}
</style>
