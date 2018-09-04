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
                        <div class="c_img" style="background-image:url(https://avatars3.githubusercontent.com/u/16174515?s=400&u=3b4d0748b9e585d4e0a196c31e6748e7a1be1899&v=4)"></div>
                            <div class="c_mask">
                                <div class="info">
                                    <p>link to git</p>
                                </div>
                            </div>
                    </a>
            </div>
            <div class="fieldG">
                <mt-field label="用户名"  disabled="true" v-model="username"></mt-field>
                <mt-field label="邮箱"  disabled="true" type="email" v-model="email"></mt-field>
                <mt-field label="手机号"  disabled="true" type="tel" v-model="phone"></mt-field>
                <mt-field label="生日"  disabled="true" type="date" v-model="birthday"></mt-field>
                <mt-field label="自我介绍"  disabled="true" type="textarea" rows="4" v-modal="introduction"></mt-field>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                isLogin:true,
                username:'',
                email:'',
                phone:'',
                birthday:'',
                introduction:''
            }
        },
        created(){
            this.isLogin=this.$route.query.flag
            var _id = this.route.query.id
            // this.$axios.post('')
            this.username = this.$store.getters['getUser']
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
