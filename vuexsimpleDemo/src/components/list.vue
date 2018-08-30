<template>
    <div>
        人口数量{{ getUser }}
        <input v-model="people">
        <button @click="addp">佳人</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                people:''
            }
        }, 
        created(){
            console.log(this.$store.state)
        },
        computed:{
            getUser(){
                return this.$store.getters['users/getUsers']
            }
        },
        methods:{
            addp(){
                this.$store.dispatch('users/addUser',{
                    name:this.people,
                })
            }
        }
    }
</script>
<style>

</style>
