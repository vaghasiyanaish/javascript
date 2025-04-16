function clearerror(){
    let error=document.querySelectorAll(".error");
    error.forEach((item)=>{
        item.innerHTML="";
    })
}



function validform() {
    clearerror();
    let isValid = true;

    let fname=document.getElementById("fname");
    let lname=document.getElementById("lname");
    let email=document.getElementById("email");
    let phone=document.getElementById("number");
    let password=document.getElementById("password");

    if(fname.value == ""){
        Document.getElementById("fnameerror").innerHTML="First Name is required";
        isValid = false;
    }

    if(lname.value == ""){
        Document.getElementById("lnameerror").innerHTML="Last Name is required";
        isValid = false;
    }

    if(email.value == ""){
        Document.getElementById("emailerror").innerHTML="Email is required";
        isValid = false;
    }

    if(phone.value == ""){
        Document.getElementById("phoneerror").innerHTML="Phone Number is required";
        isValid = false;
    }else if(phone.value.length != 10){
        Document.getElementById("phoneerror").innerHTML="Phone Number must be 10 digits";
        isValid = false;
    }

    

    if(password.value == ""){
        Document.getElementById("passworderror").innerHTML="Password is required";
        isValid = false;
    }else if(password.value.length < 8){
        Document.getElementById("passworderror").innerHTML="Password must be at least 8 characters";
        isValid = false;
    } else if(password.value.length > 15){
        Document.getElementById("passworderror").innerHTML="Password must be less than 15 characters";
        isValid = false;
    }
}