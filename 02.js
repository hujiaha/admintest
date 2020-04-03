//引入 http模块
var http=require("http")
//创建服务器 createServer  创建服务器 req=》requeset 请求 res=> response 相应
var server=http.createServer(function(req,res){
     // 设置响应头
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    
    //打印地址栏
    console.log(req.url)
    //如果地址栏中是red
    if(req.url=="/red"){
        //在html中写入red
        res.write("red")
    }else{
        //地址栏数据不是red 写入 url 地址栏是默认的
        res.write("url 地址栏是默认的")
    }
    res.end()
})
server.listen(3000)


// var http=require("http")
// var server=http.createServer(function(req,res){
//     res.writeHead(200,{"Content-type":"text/html;charset=utg-8"})
//     console.log(req.url)
// })
//