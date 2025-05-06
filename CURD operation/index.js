let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById("email");
let phone=document.getElementById("phone");
let viewform=document.getElementById("viewform");

let editfname=document.getElementById("editfname");
let editlname=document.getElementById("editlname");
let editemail=document.getElementById("editemail");
let editphone=document.getElementById("editphone");


formid.addEventListener("submit",(e)=>{
    e.preventDefault();

    let user={
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        phone: phone.value,
    };

    let users=JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);

    localStorage.setItem("users",JSON.stringify(users));
    displaydata();
    formid.reset();
    
});

function displaydata(){
    let data=JSON.parse(localStorage.getItem("users")) || [];
    viewform.innerHTML="";
    let rowdata="";

    data.forEach((item,index)=>{
        let row=`
          <tr>
              <td>${index+1}</td>
              <td>${item.fname}</td>
              <td>${item.lname}</td>
              <td>${item.email}</td>
              <td>${item.phone}</td>
              <td><button class="btn btn-danger" onclick="deleteuser(${index})">Delete</button></td>
              <td><button class="btn btn-primary" onclick="edituser(${index})">Edit</button></td>
          </tr>
        `;
        rowdata+=row;
    })
    viewform.innerHTML=rowdata;
}

function deleteuser(index){
    let users=JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index,1);
    localStorage.setItem("users",JSON.stringify(users));
    displaydata();
}

displaydata();

function edituser(index){
    let users=JSON.parse(localStorage.getItem("users")) || [];
    editfname.value=users[index].fname;
    editlname.value=users[index].lname;
    editemail.value=users[index].value;
    editphone.value=users[index].phone;

    deleteuser(index);
}

editform.addEventListener("submit",(e)=>{
    e.preventDefault();

    let user={
        fname: editfname.value,
        lname: editlname.value,
        email: editemail.value,
        phone: editphone.value,
    };

    

    let users=JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);

    localStorage.setItem("users",JSON.stringify(users));
    displaydata();
    editform.reset();

    
});

