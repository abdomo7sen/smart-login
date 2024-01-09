let signupName=document.getElementById("signupInputName")
let signupEmail=document.getElementById("signupInputEmail")
let signupPass=document.getElementById("signupInputPass")
let validNameMessage = document.getElementById("validNameMessage")
let userContainer;

if (localStorage.getItem('users')!=null) {
    userContainer=JSON.parse(localStorage.getItem("users"));
}else{
    userContainer=[];
}

function signup() {
    if (validSignupEmail() && validateNewEmail()==false&&validName()) {
        let user={
            userName:signupName.value,
            userEmail:signupEmail.value,
            userPass:signupPass.value
        }
        userContainer.push(user)
        localStorage.setItem("users",JSON.stringify(userContainer))
        successMessage()
        setTimeout(()=>{
            location.replace("index.html");
        },3000)
        clear()
        console.log(userContainer);
    }
    else if(signupName.value =="" || signupEmail.value == "" || signupPass.value == ""){
        emptyMessage();
       }
}
function validName(){
    let regux = /^[A-Z][a-z]{2,10}$/;
    let regux2 = /^[a-z]{3,6}$/;
    let regux3 = /^[A-Z]|[a-z]{1,4}/;
    let isValid = regux.test(signupName.value)
    let notValid2 = regux2.test(signupName.value)
    let notValid3 = regux3.test(signupName.value)
    if(isValid){
      validNameMessage.innerHTML = `<p class="text-success"><i class="fa-solid fa-check"></i></p>`
    } else if(notValid2){
      validNameMessage.innerHTML = `<p class="text-danger fw-bold">Name shuld be started capital letter</p>`;
    } else if(notValid3){
      validNameMessage.innerHTML = `<p class="text-danger fw-bold">Name shuld be included string yet from 3 char to 11 char</p>`;
    }
    return isValid
  }

function validSignupEmail() {
    if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(signupEmail.value) ) {
        signupEmail.classList.replace('is-invalid','is-valid')
        
        return true
    }
    
    else{
        signupEmail.classList.add("is-invalid")
        return false
    }
}
function validateNewEmail() {
    for (let i = 0; i < userContainer.length; i++) {
        if (userContainer[i].userEmail==signupEmail.value) {
            console.log("invalid");
        errorMessage()        
         return true
        }
        
    }
    return false
}

function successMessage()
{
    swal({
        title: "Signup was Successfully",
        text: "Wait a fiew seconds!",
        icon: "success",
        button: "OK",
      });
}
function errorMessage()
{
    swal({
        title: "Email already existed",
        text: "please enter another email",
        icon: "info",
        button: "OK",
      });
}
function emptyMessage()
{
    swal({
        title: "Please fill out all input fields",
        
        icon: "error",
        button: "OK",
      });
}


function clear(){
    signupName.value = "";
    signupEmail.value = "";
    signupPass.value = "";
}