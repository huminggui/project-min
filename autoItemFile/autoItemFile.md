####实现的功能####
1，首先是通过在node中输入node xxx 参数  自动创建目录以及文件

-简单描述node 这个命令的作用

这里的xxx代表的是实现这个功能的js文件，就叫做myCli.js
所以在node中输入的命令为：node myCli app -i  
myCli是node执行的js文件，app是要创建的目录，-i参数表示创建默认首页文件


- 创建目录

 使用process.argv 获取了在node中输入的内容
 mkdir用来创建目录，切记创建目录时地址写全。如果目录已经存在则错误提醒。fs.exists()判断目录是否存在。
 然后在这个目录下边自动创建image、css、js目录。
如果创建成功了则提示创建成功

- 创建index文件

这个需要判断输入的命令中有没有带 -i 如带了则会创建一个index.html文件