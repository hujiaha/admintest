//引入http模块
var http=require("http")
//引入 url 地址栏模块  url本身值url地址栏中的字符串，但想要操作这些字符串必须利用url地址栏模块
var url=require("url")
//建立http服务器
http.createServer(function(req,res){
    //将地址栏中的字符串经过url模块中的parse方法 转化成的对象并返回
    //url.parse（转化成对象）
    // var data=url.parse(req.url)
    // res.end(data.toString())

    // query 在后台接收到前端传过来的数据
    //当将url字符串成功转化成对象时 用query 接收
     var data=url.parse(req.url,true).query
    //  console.log(data.username) //在后台打印前端输入的username
        //建立一个 对象   
    var severData={
            username:"hjh",
            password:"123"
        }
        //如果前端输入的用户名等于对象的名字则赶回成功
        if(data.username==severData.username&&data.password==severData.password){
            res.end("success")
        }else{
            res.end("fail")
        }

     res.end("")
        // favicon.ico 是url字符串中的一部分（图标）
    // if(req.url=="favicon.ico"){
    //     return
    // }
}).listen(3000)