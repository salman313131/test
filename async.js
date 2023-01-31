const {readFile,writeFile} = require('fs');
console.log('starting');

readFile('./content/text.txt',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first=result;
    writeFile('./content/subfolder/test.txt',`${first}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('done with the task');
    })
})

console.log('starting new task');