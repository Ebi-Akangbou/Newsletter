var section0 =document.querySelector("#section0");
var section1 =document.querySelector("#section1");
section1.style.display="none";
var placeholderStyle=document.querySelector("#email");
placeholderStyle.classList.remove("email");
var main=document.querySelector("main");
const btn =document.querySelector("#btn");
btn.addEventListener("click", (eve)=>{
    eve.target;
    const validEmail = (email)=>{
        const emailvalid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailvalid.test(String(email).toLowerCase());
    }
    var emailAddress =document.querySelector("#email").value;
    var error =document.querySelector("#error");
    error.textContent=""; 
    if(emailAddress==="" || !validEmail(emailAddress)){
const emailAddress =document.querySelector("#email");
emailAddress.value="";
emailAddress.style.border="1px solid hsla(4, 100%, 67%, 0.849)";
emailAddress.style.background="hsla(4, 100%, 67%, 0.267)";
error.textContent="valid email required";
placeholderStyle.classList.add("email");
}else{
        const emailAddress =document.querySelector("#email");
        emailAddress.style.border="1px solid black";
        placeholderStyle.classList.remove("email");
        error.textContent="";
        section0.style.display="none";
        const confirmEmail=document.querySelector("strong");
        confirmEmail.textContent=emailAddress.value;
        section1.style.display="block";
        
    main.style.background="none";
    }

});

const btn1 =document.querySelector("#btn1");
btn1.addEventListener("click", (eve)=>{
    eve.target
    
   
        section0.style.display="block";
        var mediumScreen =window.matchMedia("(min-width: 576px)");
        if(mediumScreen.matches){
            section0.style.display="flex";
        }
        var desktopScreen =window.matchMedia("(min-width: 1200px)");
        if(desktopScreen.matches){
            section0.style.display="flex";
        }
        section1.style.display="none";
        main.style.background="#fff";
    
});

