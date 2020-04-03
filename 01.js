// 引入http模块  require  加载
    var http=require("http")
    //创建rea服务器 cteServer  创建服务器 req=》requeset 请求 res=> response 相应
    var server=http.createServer(function(req,res){
        console.log("ni hao node")
        // 设置响应头 状态码 文本类型 text/plain  image/jpeg  image/gif 编码 utf-8
        res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
        //结束响应
        res.end("结束")  //返回
    })
    //监听 端口
    server.listen(3000)
    
    //关于后台 :只要改动代码那么必须重新启动

    // var http=require("http")
    // var server=http.createServer(function(req,res){
    //     console.log("aa")
    //     res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //     res.end("lalalala")
    // })
    // server.listen(3000)