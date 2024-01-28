
const user=document.querySelector("#user");
const pass=document.querySelector("#pass");
const user1=document.querySelector("#user1");
const pass1=document.querySelector("#pass1");
const btn=document.querySelector("#btn");
const btn1=document.querySelector("#btn1");
const login=document.querySelector(".login-box");
const signup=document.querySelector(".sign-box");
const gologin=document.querySelector("#gotologin");
const gotosign=document.querySelector("#gotosign")

function isEmailValid(email) {
    // Regular expression for a basic email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Test the email against the regular expression
    return emailRegex.test(email) && email.endsWith(".com");
  }

function ispassValid(pass){
 return pass.length>7;
} 
  

btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    var mail=user.value;
    var pas=pass.value;
    if(!isEmailValid(mail)){
     alert("wrong email format");
    }else{if(!ispassValid(pas)){
        alert("password must of 8 letters");
    }else{
        window.location.href="home.html"
    }        
    }
})
btn1.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    var mail=user1.value;
    var pas=pass1.value;
    if(!isEmailValid(mail)){
     alert("wrong email format");
    }else{if(!ispassValid(pas)){
        alert("password must of 8 letters");
    }else{
        window.location.href="home.html"
    }        
    }
})
gologin.addEventListener("click",()=>{
    signup.style.top='150%';
    login.style.top='50%';
})
gotosign.addEventListener("click",()=>{
    signup.style.top='50%';
    login.style.top='150%';
})