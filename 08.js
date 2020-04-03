// querystring 查询字符串
var querystring=require("querystring")
var data=querystring
console.log(data)
/**
 * {
  unescapeBuffer: [Function: unescapeBuffer],
  unescape: [Function: qsUnescape],
  escape: [Function: qsEscape],
  stringify: [Function: stringify],
  encode: [Function: stringify],
  parse: [Function: parse],
  decode: [Function: parse]
}

querystring 作用就是解析和格式化url查询对象
 */
//querystring.parse 实现反序列化 反序列化成一个对象
var data1=querystring.parse("username=tom&&password=123")
console.log(data1)//  { username: 'tom', password: '123' }

//querystring.stringify  序列化  转化成字符串
    var data2=querystring.stringify({"username":"rom","password":"123"})
    console.log(data2) //username=rom&password=123

//querystring.escape 对传入的字符串进行编码
    var data3=querystring.escape("name=2")
    console.log(data3)//name%3D2

//querystring.unescape 解码
var data4=querystring.unescape("name%3D2")
console.log(data4)//name=2
