//by using express framework we can create server easily
const express=require('express');
const app=express();
const jwt=require('jsonwebtoken');
const secretkey="71f7cedcd46d2899999aeb59cd225d11";
const port=3000;
// app.get('/',(req,res)=>{
//     res.send('hello world from express server');
// });

app.use(express.json());//middleware to parse json data
let users=[
    {id:1,name:'john',email:'john@example.com'},
    {id:2,name:'doe',email:'doe@example.com'},
    {id:3,name:'alice',email:'alice@example.com'}
];

app.get('/login',(req,res)=>{
    const user={
        id:1,
        username:"Ram",
        role:'admin'
    };
    const token=jwt.sign({user},secretkey,{expiresIn:'50s',notBefore:'10s'});
    console.log(`Generated token: ${token}`);
    res.status(200).json({generatedtoken:token});
});
//to validate token
app.get('/profile',(req,res)=>{
    try{
        let token=req.headers["authorization"];

        token=token.split(" ")[1];
        // console.log(`verification token:${token}`);
        const verified=jwt.verify(token,secretkey);
        res.status(200).json({message:"access granted",data:verified});
    }catch(err){
        if(err instanceof jwt.TokenExpiredError){
            res.status(401).json({message:"token expired"});
        }else if(err instanceof jwt.NotBeforeError){
            res.status(401).json({message:"token not active"});
        }else if(err instanceof jwt.JsonWebTokenError){
            res.status(401).json({message:"invalid token"});
        }
        else{
            res.status(500).json({message:"internal server error"});
        }
    }
    // if(verified instanceof TokenExpiredError){
    //     res.status(401).json({message:"token expired"});
    // }else if(verified instanceof JsonWebTokenError){
    //     res.status(401).json({message:"invalid token"});
    // }else{
    //     res.status(200).json({message:"access granted",data:verified});
    // }
});
//api to get users data
app.get('/users',(req,res)=>{//get users
    res.status(200).json(users);//return users data in json format
});

app.get('/user/:id',(req,res)=>{//get user by id
    const userId=Number(req.params.id);
    // console.log(userId);
    // console.log(typeof userId);
    
    
    const user=users.find(u=>u.id===userId);
    if(user){
        res.status(200).json(user);//return user data in json format    
    }else{
        res.status(404).json({message:"user not found"});
    }
});
//delete user api
app.delete('/deleteuser/:id',(req,res)=>{
    const userId=Number(req.params.id);
    users=users.filter((u)=>u.id!=userId);
    if(!userId){
        res.status(404).json({message:"user not found"});
    }else{
    
        res.status(200).json(users);
    }

    // console.log(updatedUsers);
    // res.send(updatedUsers);
    // const userIndex=users.findIndex(u=>u.id===userId);
    // if(userIndex!==-1){
    //     users.splice(userIndex,1);//remove user from users array
    //     res.status(200).json({message:"user deleted successfully"});
    // }else{
    //     res.status(404).json({message:"user not found"});
    // }
});

//api to delete all users at a time
app.delete('/deleteallusers',(req,res)=>{
    // users=[];
    res.status(200).json({message:"all users deleted successfully"});
    res.send(users);
});

//api to insert user data
app.post('/insertuser',(req,res)=>{
    const newUser={
        id:req.body.id,
        name:req.body.name,
        email:req.body.email
    };//get user data from request body
    users.push(newUser);//insert new user data into users array
    res.status(201).json({message:"new user added successfully"});//return the newly created user data
});


app.listen(port,()=>{
    console.log(`server is running on url: http://localhost:${port}`);
});
//in express it automatically create servers just we write listen method with port number
//  but in http module we have to create server explicitly