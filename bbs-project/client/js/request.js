// 封装一个 http client 用来发请求

const request = (() => {
    // 创建一个 axios 的实例对象
    const httpClient = axios.create({baseUrl: '/'})

    // httpClient 添加响应拦截器
    // 响应拦截器: 每次响应都会执行的函数
    httpClient.interceptors.response.use(res => {
        if (res.data.success) {
            return Promise.resolve(res.data)
        } else {
            // 服务器请求业务失败
            // 统一打印失败信息
            alert(res.data.msg)
            if (res.data.msg === '登录检测失败') {
                location.href = '/signIn.html'
            }
            return Promise.reject(new Error(res.data.msg))
        }
    })

    return {
        post: httpClient.post,
        get: httpClient.get
    }
})()