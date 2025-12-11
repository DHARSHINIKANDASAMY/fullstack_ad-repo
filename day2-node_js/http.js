const http=require("http");
const port=4000;
const server=http.createServer().listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
// const server=http.createServer();
// console.log(server);