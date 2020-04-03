var url =require("url")

// url模块的作用：
//         url字符串是一个结构化的字符串（url本身值url地址栏中的字符串，但想要操作这些字符串必须利用url地址栏模块）
/*
    注意：
        url模块提供了两套api处理url
        node.js遗留特有的api

*/ 
//parse 解析url 返回一份url属性的对象
var data=url.parse("http://localhost:3000/?username=hjh&password=123")
// 当串true 时 就将字符串开始转化成对象
// var data=url.parse("http://localhost:3000/?username=hjh&password=123",true).query
/**
 *  {
  protocol: 'http:', 协议
  slashes: true,  
  auth: null,  用户名和密码
  host: 'localhost:3000', 主机名
  port: '3000', 端口号
  hostname: 'localhost', 主机名不带端口号
  hash: null,  哈希值
  search: '?username=hjh&password=123', 查询字符串
  query: 'username=hjh&password=123',   请求参数 针对于get
  pathname: '/',                     路径名称
  path: '/?username=hjh&password=123', 带查询的路径名称
  href: 'http://localhost:3000/?username=hjh&password=123'  原字符串本身
}
 * 
 */

// console.log(data)

//resover 解析浏览器 超连接 ，转换成基本的url
//参数 ：from 解析时对应的urL（本来的url地址）  to 要解析的超链接(要替换的url)  用第二个参数去替代本来的地址
var data=url.resolve("/aa/bb/vv","haha") 
console.log(data)// 打印为 /aa/bb/haha
var datetwo=url.resolve("http://localhost:3000/","ffff")
console.log(datetwo)//打印为  http://localhost:3000/ffff
var datathree=url.resolve("hrrp:localhost:3000/aa","vv")
console.log(datathree)//打印为   hrrp:localhost:3000/vv

//format 返回一个格式化的url 字符串  （其实就是把对象转成字符串）
 var  objul={
    protocol: 'http:', 
    slashes: true,  
    auth: null, 
    host: 'localhost:3000',
    port: '3000', 
    hostname: 'localhost',
    hash: null, 
    search: '?username=hjh&password=123', 
    query: 'username=hjh&password=123',   
    pathname: '/',                    
    path: '/?username=hjh&password=123', 
    href: 'http://localhost:3000/?username=hjh&password=123'  
  }
  var mat=url.format(objul)
  console.log(mat) //打印 http://localhost:3000/?username=hjh&password=123