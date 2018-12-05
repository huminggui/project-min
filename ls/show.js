let commander=require("commander");
let fs=require("fs");
commander.version("v1.0.0","-v,--version");

//子命令的名称和文件名称一样，在执行命令的时候可以省略掉
/*
    不知为何action必须要写在commander(父命令)中才能生效，
    这个会不会和版本号以及commander.parse()有关系呢。我打算尝试以下。
    结果是：无法使用。

*/
// let subCommander=commander.command(" <path>");


commander.option("-p,--path [path]","print path",__dirname);
//list命令，更详细的显示文件的信息
commander.option("-l,--list","show file");

commander.action((path)=>{
        fs.readdir(commander.path,function(err,files){
            //数字中的每个元素增加一个换行符且连接成一个字符串
            if(commander.list){ 
                files=files.filter((item)=>{
                    return item !="System Volume Information";
                });
                let strFiles=files.map((file)=>{
                    // let stat=fs.statSync(commander.path+"\\"+file);
                    //     console.log(commander.path+"\\"+file);

                    //     let type;
                    
                 
                    fs.stat(commander.path+"\\"+file,function(err,stats){
                        if(err){
                            console.log(file+"错误:"+err);
                        }else{
                           let type=stats.isDirectory()?"目录":"文件";
                            console.log(`${file}\t\t\t\t${type}\t\t\t\t
                            ${stats.size}\t\t\t\t${stats.atime}\r\n`);
                        }
                    }); 
                   
                }).join("");
                console.log(strFiles);
            }else{
                let strFiles=files.map((file)=>{
                    return `${file}\r\n`;
                }).join("");
                console.log(strFiles);
            }    
            
        });



});

commander.parse(process.argv);