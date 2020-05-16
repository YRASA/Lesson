## Content-Type: text/plain
提交给后端的数据就是纯文本
```js
name=123
file=1.jpg // 文件名 没有文件内容
```

## Content-Type: application/x-www-form-urlencoded
```js
name=123&file=1.jpg
```

## Content-Type: multipart/form-data
```js
-----------------------------205579936434786223734260171678 // 分隔符
Content-Disposition: form-data; name="name"

123
-----------------------------205579936434786223734260171678
Content-Disposition: form-data; name="file"; filename="test.txt" 1.jpeg\r\n
Content-Type: text/plain image/jpeg/r/n
\r\n
123456789\r\n // 文件内容
\r\n
-----------------------------205579936434786223734260171678-- // 结束有两个'-'
```
前面两种编码对于二进制文件或者非ASCII字符处理起来是很低效的
分隔符前面有两个'-': --boundary

后端处理文件上传:
- 分隔符分割
- 得到分割之后的每一块,文件内容,fs.write() 保存文件
- 完成