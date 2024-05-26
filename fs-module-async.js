const {readFile,writeFile}=require('fs')

readFile('./folder/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result

    readFile('./folder/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second=result

        writeFile('./folder/result-asyn.txt',`here is the result: ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
        })
    })
})