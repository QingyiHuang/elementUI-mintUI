<template>
    <div class="primary_box">
        <nav-bar class="topBar" title="个人"></nav-bar>
        
        <div v-if="isLogin" class="primary_loginbox">
            <p>亲爱的用户，您还没有登录</p>
            <router-link :to="{name:'loginPage'}">
                <button class="Lbtn">Login</button>
            </router-link>
            <router-link :to="{name:'registerPage'}">
                <button class="Rbtn">Register</button>
            </router-link>
        </div>
        <div v-else>
            <div class="cicle1">
                    <a href="https://github.com/QingyiHuang" class="wrap">
                        <div class="c_img" :style="avatar"></div>
                            <div class="c_mask">
                                <div class="info">
                                    <p>link to git</p>
                                </div>
                            </div>
                    </a>
            </div>
            <div class="fieldG">
                <mt-field label="用户名"  :disabled='flag' v-model="username"></mt-field>
                <mt-field label="邮箱"  :disabled='flag' type="email" v-model="email"></mt-field>
                <mt-field label="手机号"  :disabled='flag' type="tel" v-model="phone"></mt-field>
                <mt-field label="生日"  :disabled='flag' type="date" v-model="birthday"></mt-field>
                <mt-field label="自我介绍"  :disabled='flag' type="textarea" rows="4" v-modal="introduction"></mt-field>
                <div class="btns">
                    <mt-button size="large" type="primary">修改资料</mt-button>
                    <mt-button size="large" @click="exist" type="danger">退出登录</mt-button>
                </div>
            </div>
            

        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                flag:true,//表单操纵flag
                isLogin:true,
                username:'',
                email:'',
                phone:'',
                birthday:'',
                introduction:'',
                avatar:'',
                pow:''
            }
        },
        methods:{
            exist(){
                window.sessionStorage.setItem('isLogin','')
                window.sessionStorage.setItem('user','')
                this.isLogin=true
                this.$store.dispatch('changeLogin',{err_code:''})
                this.$router.replace({name:'primary'})
            }
        },
        created(){
            let _id= this.$route.params.id

            // this.$axios.post('')
            // this.username = this.$store.getters['getUser']
            if(_id){
                console.log(_id)
                this.$axios.get('/userInfo?id='+_id)
                .then((res) => {
                    var userObj={
                                'username':res.data.username,
                                'avatar':'background-image:url('+res.data.avatar+')',
                                'phone':res.data.phone,
                                'birthday':res.data.birthday,
                                'introduction':res.data.introduction,
                                'email':res.data.email
                                }
                    userObj = JSON.stringify(userObj)
                    console.log(userObj)
                    window.sessionStorage.setItem('user',userObj)
                    var obj =JSON.parse(window.sessionStorage.getItem('user'))
                            this.username = obj.username,
                            this.avatar= obj.avatar,
                            this.phone = obj.phone,
                            this.birthday = obj.birthday,
                            this.introduction = obj.introduction,
                            this.email = obj.email
                })
                .catch(err=>{
                    console.log(err)
                })
            }
            var loginStatu=this.$store.getters['getLoginStatus']
            console.log(loginStatu)
            if(parseInt(loginStatu)===0){//vuex中的登录状态决定了当前页面显示
                this.isLogin=false
                    var obj =JSON.parse(window.sessionStorage.getItem('user'))
                            this.username = obj.username,
                            this.avatar= obj.avatar,
                            this.phone = obj.phone,
                            this.birthday = obj.birthday,
                            this.introduction = obj.introduction,
                            this.email = obj.email
            }else{
                this.isLogin=true
            }

        }

    }
</script>
<style scoped>

.primary_box[data-v-028471bc]{
    background: #16181c;
}
.primary_loginbox>p{
    color: aliceblue;
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}
.Lbtn{
    padding: 6px 10px;
    background-color: forestgreen;
    color: aliceblue;
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}
.Rbtn{
    padding: 6px 10px;
    margin-left: 20px;
    background-color: rgb(201, 16, 16);
    color: aliceblue;
    font-size: 26px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
}
.primary_loginbox{

    margin-top: 180px;
    text-align: center;
}
select, textarea, input[type='text'], input[type='search'], input[type='password'], input[type='datetime'], input[type='datetime-local'], input[type='date'], input[type='month'], input[type='time'], input[type='week'], input[type='number'], input[type='email'], input[type='url'], input[type='tel'], input[type='color'] 
{    margin-bottom: 0px}
.primary_box{
    background-color: #fff;
}
    .fieldG{
        margin-top: 10px;
        margin-bottom: 50px;
    }
    .fieldG input{
        border: 0;
    }

	.cicle1{
		position: relative;
		margin:30px auto;
		width: 100px;
		height: 100px;
		overflow: hidden;
	}
	.wrap,.c_img,.border,.c_mask{
		width: 100px;
		height: 100px;
	}
	.wrap{
		display: block;
		position: relative;
		margin:0 auto;
	}
	.c_img{
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		border-radius: 50%;
		top:0px;
	}
	.wrap .border{
		position: absolute;
		border: 4px solid #fff;
		top: -4px;
		left: -4px;
		border-radius: 50%;
	}
	.c_mask{
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 50%;
		-webkit-transition:all 5s ease-in;
		transition:all 0.5s ease-in;
		color:rgba(255,255,255,0);
	}
	.wrap:hover .c_mask{
		background-color:rgba(0,0,0,1);
		color:rgba(255,255,255,1);
	}
	.info{
		position: absolute;
		width: 100%;
		top: 50%;
		left: 0;
		text-align: center;
		-webkit-transform:translateY(-50%);
	}
</style>
