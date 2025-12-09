const express=require('express');
const app=express();
const port=3000;
app.use(express.json());//middleware to parse json data
let employee=[
    {id:1,name:'john',email:'john@example.com',age:30,role:'developer',salary:50000},
    {id:2,name:'doe',email:'doe@example.com',age:25,role:'designer',salary:45000},
    {id:3,name:'alice',email:'alice@example.com',age:28,role:'manager',salary:60000},
    {id:4,name:'bob',email:'bob@example.com',age:32,role:'tester',salary:40000},
    {id:5,name:'eve',email:'eve@example.com',age:29,role:'analyst',salary:48000}
];
app.get('/employees',(req,res)=>{//get employees
    res.status(200).json(employee);//return employees data in json format
}); 
app.get('/employee/:id',(req,res)=>{//get employee by id
    const empId=Number(req.params.id);
    const emp=employee.find(e=>e.id===empId);
    if(emp){
        res.status(200).json(emp);//return employee data in json format    
    }else{
        res.status(404).json({message:"employee not found"});
    }
});
app.post('/newemployee',(req,res)=>{//add new employee
    const newEmp=req.body;
    employee.push(newEmp);
    res.status(201).json({message:"employee added successfully"});
});
app.delete('/deleteemployee/:id',(req,res)=>{//delete employee by id
    const empId=Number(req.params.id);
    employee=employee.filter((u)=>u.id!=empId);
    if(!empId){
        res.status(404).json({message:"user not found"});
    }else{
    
        res.status(200).json(employee);//return updated employees data in json format
    }
});
app.delete('/deleteallemployees',(req,res)=>{//delete all employees
    employee=[];
    if(employee.length===0){
        res.status(200).json({message:"all employees deleted successfully"});
    }else{
        res.status(500).json({message:"error deleting employees"});
    }
});
app.put('/updateemployee/:id',(req,res)=>{//update employee by id
    const empId=Number(req.params.id);
    const updatedEmp=req.body;
    let empIndex=employee.findIndex(e=>e.id===empId);
    if(empIndex!==-1){
        employee[empIndex]=updatedEmp;
        res.status(200).json({message:"employee updated successfully"});
    }else{
        res.status(404).json({message:"employee not found"});
    }
});
app.listen(port,()=>{
    console.log(`server is running on url: http://localhost:${port}`);
});