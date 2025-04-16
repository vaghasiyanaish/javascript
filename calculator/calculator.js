let display= document.getElementById("display");
let buttons=document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        let value=button.innerText;

        if(value=="C"){
            clearDisplay();
        }else if(value=="="){
            calculateResult();
        }else{
            appendToDisplay(value);
        }
    })
})

let currentValue="";

function displayValue(){
    display.value=currentValue;
}
function appendToDisplay(value){
    currentValue+=value;
    displayValue();
}
function clearDisplay(){
    currentValue="";
    displayValue();
}
function calculateResult(){
    let result=eval(currentValue);
    currentValue=result.toString();
    displayValue();
}
