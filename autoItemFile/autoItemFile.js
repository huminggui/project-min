let fs=require("fs");

let itemName=process.argv[2];
//如果用户并没有输入目录名字，那么我们就默认目录为app
if(itemName==undefined){
    itemName="app";
}
let path=__dirname+`/${itemName}`;

fs.stat(path,function(err,status){
    //报错说明文件夹是不存在的
    if(err){
        fs.mkdir(path,function(err){
           if(err){
               console.log("文件创建失败");
               return;
           }else{
                console.log(itemName+"文件创建成功");
                fs.mkdir(path+"/images",function(err){
                    if(err){
                        console.log("images文件创建失败");
                        return;
                    }else{
                        console.log("images文件创建成功");
                        return;
                    }
                })
                fs.mkdir(path+"/js",function(err){
                    if(err){
                        console.log("js文件创建失败");
                        return;
                    }else{
                        console.log("js文件创建成功");
                        return;
                    }
                })
                fs.mkdir(path+"/css",function(err){
                    if(err){
                        console.log("css文件创建失败");
                        return;
                    }else{
                        console.log("css文件创建成功");
                        return;
                    }
                })
                return;
           }
        });
    }else{
        console.log("文件已经存在");
        return;
    }


});

//如果存在-i表示需要创建一个index.html的主页文件
let isI=process.argv.includes("-i");
let contentHtml=`
    <html>
        <head>
            <meta charset=utf-8 >
            <title>项目文件</title>
        </head>
        <body>
            <h1>
                项目初始文件
            </h1>
        </body>
    <html>
`;
if(isI){
    fs.writeFile(path+"/index.html",contentHtml,function(err){
        if(err){
            console.log("index.html创建失败");
        }else{
            console.log("index.html创建成功");
        }
    });
}