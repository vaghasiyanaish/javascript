// document.querySelector("button").addEventListener("click", () => {
//     let xhr=new XMLHttpRequest();

// xhr.open("GET","https://dog.ceo/api/breeds/image/random");

// xhr.send();

// xhr.onload=function(){
//     console.log(xhr.responseText);
//     let data=JSON.parse(xhr.responseText);
//     let img=document.createElement("img");
//     img.src=data.message;
//     img.style.width="300px";
//     img.style.height="300px";
//     img.style.padding="10px";
//     img.style.borderRadius="50%";
//     document.querySelector("#dogview").append(img);
// }
// });

fetch("https://dog.ceo/api/breeds/list/all")
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data.message);
    let keys=Object.keys(data.message);
    keys.forEach((key)=>{
        let option=document.createElement("option");
        option.value=key;
        option.innerText=key;
        document.querySelector("#dogselect").append(option);
    })
})

document.querySelector("button").addEventListener("click", () => {
    let breed=document.querySelector("#dogselect").value;
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        console.log(data.message);
        let img=document.createElement("img");
        img.src=data.message;
        img.style.width="300px";
        img.style.height="300px";
        img.style.padding="10px";
        img.style.borderRadius="50%";
        document.querySelector("#dogview").prepend(img);
    })
}
)

