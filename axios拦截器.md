### 拦截器 intercepetors

过滤，在每一次请求与响应中·添油加醋

axios.interceptors.request.use(fn) 在请求之前

function(config){config.headers={xxx}} config 相当于options 对象

```javascript
Axios.interceptors.requset.use(function(config){
    //返回没有修改的设置，不return config 就是一个拦截
    //个性化修改
    config.headers.accept = '.....'//追加
    config.headers={
        accept:'....'//覆盖
    }
    
    return config
})
```

