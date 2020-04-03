//目录模块
var path=require("path")
//basename 返回path 的最后一部分
console.log(path.basename("aa/bb/cc/1.js"))//打印结果为 1.js
 //dirname 返回目录名  
  console.log(path.dirname("aa/bb/cc/1.js"))//打印结果为aa/bb/cc
 //format 从对象中解析路径字符串
 console.log(path.format({
     dir:"/aa", //,目录
     root:"bb",  //目录
     base:"1.js", //文件名称 =name+exts
     name:"aaaaaa",
     ext:".css"  //后缀名
 }))   //打印结果为 /aa\1.js
 //注 ****、    
    //如果dir 和root 同时存在 ，root 会被忽略
    //如果base 和ext/name 同时存在 ，则会忽略ext 和name


   // parse 返回一个对象
    console.log(path.parse("/aa/bb/cc/2.js"))//打印结果为  {dir:"/aa/bb/cc",base:"2.js",ext:"js"}

    //join 将所有的名称利用path.seq 连接起来，再通过normalize 格式化 （就是拼接成字符串）
    console.log(path.join("/aa","bb","./2.js"))//打印结果为\aa\bb\2.js
    
    //normalize 格式化 规范化返回的path
    console.log(path.normalize("/aa/////////bb/../1.js"))//打印结果为\aa\1.js  注：.. 代表上一级
    //extname 获取文件后缀名
    console.log(path.extname("/aa/bb/2.html"))//打印结果为.html
    //resolve 获取文件的绝对路径
    console.log(path.resolve("aa","bb","cc","1/2"))//打印结果为 aa\bb\cc\1\2
    //relative 获取相对路径
    var begin="c:aa/b"
    var end="c:dd/v"
    console.log(path.relative(begin,end)) //打印结果为..\..\dd\v
