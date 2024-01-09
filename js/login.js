let loginEmail=document.getElementById("loginInputEmail")
let loginPass=document.getElementById("loginInputPass")
let loginBtn=document.getElementById("loginBtn")

let userAccountsSave = JSON.parse(localStorage.getItem("users"))

console.log(userAccountsSave);
function login() {
    if(localStorage.getItem("users") != null){
        for (let i = 0; i < userAccountsSave.length; i++) {
            let validEmail = loginEmail.value == userAccountsSave[i].userEmail;
            let validPassword = loginPass.value == userAccountsSave[i].userPass;
            if(validEmail && validPassword){
                localStorage.setItem("user", JSON.stringify(userAccountsSave[i].userName))
                successMessage();
                setTimeout(()=>{
                    window.open("home.html","_self")
                },3000)
            }
        }
    } 
    else if(localStorage.getItem("users") == null){
        errorMessage2();
    }
}



function validLoginEmail() {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(loginEmail.value) ) {
            loginEmail.classList.replace('is-invalid','is-valid')
            
            return true
        }
        
        else{
            loginEmail.classList.add("is-invalid")
            return false
        }
    }
    function successMessage()
{
    swal({
        title: "Success",
        text: "Wait a fiew seconds!",
        icon: "success",
        button: "OK",
      });
}
function errorMessage()
{
    swal({
        title: "email or password is incorrect",
        text: "please enter correct data",
        icon: "error",
        button: "OK",
      });
}

function errorMessage2()
{
    swal({
        title: "email not found",
        text: "please go to sign up and login again",
        icon: "error",
        button: "OK",
      });
}
