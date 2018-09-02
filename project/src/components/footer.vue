<template>
    	<nav class="mui-bar mui-bar-tab ">
			<router-link class="mui-tab-item" :to="{name:'home'}">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'shop'}">
				<span class="mui-icon icon-gaiicon-"><span class="mui-badge">4</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'search'}">
				<span class="mui-icon icon-msnui-find-bold"></span>
				<span class="mui-tab-label">查找</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'primary'}">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">2</span></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
            
		</nav>
</template>
<style scoped>
	.mui-bar-tab{
		position: fixed;
		bottom: 0;
	}
</style>
