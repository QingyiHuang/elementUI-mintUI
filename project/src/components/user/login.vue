<template>
    <div>
        <nav-bar title="登录"></nav-bar>
        <h1>登录</h1>
        <form class="mui-input-group">
            <div class="mui-input-row">
                <label>用户名</label>
            <input type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="userName">
            </div>
            <div class="mui-input-row">
                <label>密码</label>
                <input type="password" class="mui-input-password" placeholder="请输入密码" v-model="password">
            </div>
            <div class="mui-button-row">
                <button type="button" class="mui-btn mui-btn-primary" @click="log">登录</button>
                <router-link :to="{name:'primary'}">
                    <button type="button" class="mui-btn mui-btn-danger" >取消</button>
                </router-link>
            </div>
        </form>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                userName:'',
                password:''
            }
        },
        methods:{
            log(){
                var userName = this.userName
                var password = this.password

                if(!userName){
                    return alert("请输入用户名")
                }
                if(!password){
                    return alert("您还没有输入密码")
                }
                this.$axios.post('/login',{
                    username:this.userName,
                    password:this.password,
                })
                // .then((result) => {
                    
                // }).catch((err) => {
                    
                // });
            },

        },
        created(){

        }
    }
</script>
<style scoped>
    .mui-input-group{
        height: 220px;
        margin-top: 100px;
        color: aliceblue;
        font-size: 24px;
        background-color: maroon;
    }
.mui-input-group .mui-input-row{
    height: 60px;
}
.mui-input-group .mui-input-row input{
    height: 60px;
    color: aliceblue;
    font-size: 18px;
}
    h1{
        margin-top: 30px;
        text-align: center;
        color: aliceblue;
    }
</style>
