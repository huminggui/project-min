

const commander=require("commander");
const fs=require("fs");


commander.version("v1.0.0","-v,--version");
//子命令
/* 
    在这里有个非常奇怪的地方，就是创建了一个没有名字的子命令，而且还是必须带参数的，
    创建之后使用node ls无法在执行当前的action了。
    而是满足子命令的条件才会执行action里边的内容,命令为：node ls d: 这样才可以
    那是因为，一旦有子命令则父命令的action就会去满足子命令操作。父命令其实就不存在了。
    解决node ls也会执行命令，如下：
    原理：把父命令变成子命令的格式
    因为node ls d:  和 node ls的差别就是node ls d: 这个命令是带有参数，
    也就是process.argv会多一个值。所以我们只要在执行node ls时，给process.argv加上一个
    值，这个值刚好是当前目录的路径。
    表面上是node ls 实际上是 node ls __dirname  与子命令的格式一样。

*/

const subCommander=commander.command(" <path>");

//逻辑操作
commander.action((path)=>{
    fs.readdir(path,function(err,files){
        console.log(files);
    });

});

if(process.argv.length<3){
    process.argv.push(__dirname);
}

commander.parse(process.argv);