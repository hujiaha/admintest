//引入http模块
var http=require("http")
//引入 文件系统
var fs=require("fs")
//建立服务器
http.createServer(function(req,res){
    
    //如果地址栏是/red
    if(req.url=="/red"){
        fs.readFile("./static/red.html",function(err,data){
            //结束返回data
            res.end(data.toString())
        })
         //如果地址栏是/green
    }else if(req.url=="/green"){
        fs.readFile("./static/green.html",function(err,data){
            //结束返回data
            res.end(data.toString())
        })
    }else if(req.url=="/red.css"){
        fs.readFile("./static/red.css",function(err,data){
            //结束返回data
            res.end(data)
        })
    }else if(req.url=="/timg1.jpeg"){
        fs.readFile("./static/timg1.jpeg",function(err,data){
            //结束返回data
            res.end(data)
        })
    }else{
        //否则是404
        res.end("404")
    }
    
    
    
}).listen(3000,function(){
    console.log("服务器已经挂起")
})