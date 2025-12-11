let fs=require('fs');
// fs.writeFile("sample.txt","i updated data",(err)=>{
//     console.log(err);
//     console.log("file created");
// });
// fs.appendFile("sample.txt","\n new data added",(err)=>{
//     console.log(err);
// });
fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err){
    console.log(err);
    }else{
    console.log(data);
    }
});

// fs.writeFile("index.txt","hello world",(err)=>{
//     console.log(err);
//     console.log("file created");
// });
// fs.unlink("index.txt",(err)=>{
//     console.log(err);
//     console.log("file deleted");
// });
// console.log(fs);
// console.log(fs.exists('samplefile.js'));
