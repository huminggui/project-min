##通过ls命令显示文件##
###第一步是node ls 时显示当前目录的文件###
- 比较好实现，直接commander.action(()=>{});
- fs.readDir();这个可以获取目录的下的文件 
###第二个功能是node ls paht(具体的路径)，这个是用ls实现指定的路径


##show.js使用另外一种方法来实现文件夹显示功能##
- 命令的操作方式如下：node show -p d: 
- 我们在此基础上加上-list 来区分是否是文件夹或者是文件，同时显示大小以及修改的文件的时间
  