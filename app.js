/* Fill your code*/
function formValidate(){
    var name=document.forms["RegForm"]["Name"];
    var email=document.forms["RegForm"]["EMail"];
    var phone=document.forms["RegForm"]["phone"];
    var password=document.forms["RegForm"]["Password"];
    var cpassword =document.forms["RegForm"]["cPassword"];
    var address=document.forms["RegForm"]["Address"];

var errname=document.getElementById("name");
var erremail=document.getElementById("email");
var errphone=document.getElementById("phone");
var erraddress=document.getElementById("address");
var errpwd=document.getElementById("pwd");
var errcpwd=document.getElementById("cpwd")


let patternName= /.{8,15}/
let patternSpace=/\s/
let patternEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let patternPass= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/
let patternPhone= /^\d{10}$/

if(patternName.test(name.value)===false){
    errname.innerText="atleast 8 to 15 characters required";
    name.focus();
    return false;
}else{
    errname.innerText="";
}
if(address.value===""){
    erraddress.innerText="address cannot be empty";
    address.focus();
    return false;
}else{
   erraddress.innerText="";
}
if(email.value==="" ||  patternSpace.test(email.value)){
    erremail.innerText="email cannot be empty or contain spaces";
    email.focus();
    return false;
}
else if(patternEmail.test(email.value)===false)
{
  erremail.innerText="enter proper mail id";
    email.focus();
    return false;
}
else {
    erremail.innerText="";
}
if(password.value=="")
{
    errpwd.innerText="Password cannot be empty";
    password.focus();
    return false ;
}
else if(patternPass.test(password.value)===false)
{
    errpwd.innerText="Password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number and symbols (min 6 char. and max 15 char)";
    password.focus();
    return false; 
}
else{
    errpwd.innerText="";
}   
if(cpassword.value==""){
    errcpwd.innerText="Password cannot be empty"
    cpassword.focus();
    return false ;
}

else if(cpassword.value!==password.value){
        errcpwd.innerText="Passwords are not matching"
        cpassword.focus();
        return false;
}
else{
    errcpwd.innerText="";
}

if(phone.value==""){
    errphone.innerText="phone feild cannot be empty"
    phone.focus();
    return false;
}

else if(patternPhone.test(phone.value)===false){
       errphone.innerText="Phone no. must be ten digit no."
       phone.focus();
       return false;
}
else{
    errphone.innerText="";
}

return true;
}