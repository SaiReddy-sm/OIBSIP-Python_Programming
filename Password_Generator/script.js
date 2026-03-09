function generatePassword(){

let length = document.getElementById("length").value;

let upper = document.getElementById("uppercase").checked;
let lower = document.getElementById("lowercase").checked;
let numbers = document.getElementById("numbers").checked;
let symbols = document.getElementById("symbols").checked;

let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let numberChars="0123456789";
let symbolChars="!@#$%^&*()_+";

let allChars="";

if(upper) allChars+=upperChars;
if(lower) allChars+=lowerChars;
if(numbers) allChars+=numberChars;
if(symbols) allChars+=symbolChars;

if(allChars===""){
alert("Select at least one option");
return;
}

let password="";

for(let i=0;i<length;i++){

password+=allChars[Math.floor(Math.random()*allChars.length)];

}

document.getElementById("password").value=password;

}

function copyPassword(){

let pass=document.getElementById("password");

pass.select();
document.execCommand("copy");

alert("Password copied!");

}
