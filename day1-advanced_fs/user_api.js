let url="https://api.github.com/users";
window.fetch(url).then((res)=>{
    return res.json();
}).then((data)=>{
    data.map((user)=>{
        // console.log(user);
        let sub_container=document.createElement("div");
        let image_container=document.createElement("div");
        let user_container=document.createElement("h3");
        let images=document.createElement("img");
        let container=document.getElementById("container");

        let name=document.createElement("h1");
        let login=document.createElement("h2");
        let type=document.createElement("h2");
        name.innerText=`UserId: ${user.id}`;
         user_container.appendChild(name);
        login.innerText=`Name: ${user.login}`;
         user_container.appendChild(login);
        type.innerText=`Type: ${user.type}`;
        user_container.appendChild(type);


       

        container.appendChild(sub_container);
        sub_container.appendChild(image_container);
        sub_container.appendChild(user_container);
        image_container.appendChild(images);

        images.src=`${user.avatar_url}`;
        images.style.height = "250px";
        images.style.width = "250px";
        images.style.borderRadius = "50px";
        sub_container.style.backgroundColor="grey";
        sub_container.style.margin="auto";
        sub_container.style.display="flex";
        sub_container.style.borderRadius="20px";
        sub_container.style.justifyContent="space-around";
        sub_container.style.alignItems="center";
        sub_container.style.padding="20px";
        sub_container.style.marginTop="20px";
        sub_container.style.width="60%";
        // console.log(user.avatar_url);
        console.log(sub_container);
        console.log(user_container);

    
    });
});
// .then((data)=>{
//     console.table(data);//we can give log instead of table also
// }).catch((err)=>{
//     console.log("Error:",err);
// });
// //async await
// async function fetchUsers(){
//     try{
//DOM manipulation
//dom methods,dom selectors,event listeners
//dom methods-create,read,update,delete
// let newElem=document.createElement("div");
// newElem.innerText="Hello World!";
// newElem.id="div1";
// newElem.className="myDiv";
// document.body.appendChild(newElem);//create
// let readElem=document.getElementById("div1");//read
// console.log(readElem.innerText);
// readElem.innerText="Hello Universe!";//update
// console.log(readElem.innerText);
// document.body.removeChild(readElem);//delete
// //dom selectors
// let elems=document.getElementsByClassName("myDiv");
// console.log(elems);
// let pElems=document.getElementsByTagName("p");
// console.log(pElems);
// let queryElem=document.querySelector("#div1");
// console.log(queryElem);
// let queryAllElems=document.querySelectorAll(".myDiv");
// console.log(queryAllElems);
// //event listeners
// let button=document.createElement("button");
// button.innerText="Click Me";
// document.body.appendChild(button);
// button.addEventListener("click",()=>{
//     alert("Button Clicked!");
// });
//     let res=await fetch(url);
//     let data=await res.json();
//     console.log(data);
//     }catch(err){
//         console.log("Error:",err);
//     }
// }
// fetchUsers();
