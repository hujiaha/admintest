//引入文件系统
var fs=require("fs")
//读文件  readFile（第一个参数：ulr文件地址，
//第二参数：具体选项配置，包括数据的编码方式（可写可不写），
//第三参数callback:回调函数）
fs.readFile("./static/1.txt",'utf-8',function(err,data){
    //如果存在路径中的文件则err为null，不存在就报错
    console.log(err)//是否报错，不报错 就为 null 报错就输出
    console.log(data.toString())//data为文件内容 默认为buffer类型  所以需要用toString转化成字符串
}) 

// //writeFile 写入文件 参数1.url 2.写入的字符串 3.callback
// fs.writeFile("./static/2.txt","写一个名字",function(err){
//     //先看路径中有没有相应的文件，没有新建相应的文件在写入
//     console.log(err)
// })