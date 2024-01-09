let welcomeMsg=document.getElementById("welcomeMsg")
// let logout = document.getElementById("LogoutBtn");
let userAccountsSave = JSON.parse(localStorage.getItem("user"))

welcomeMsg.innerHTML=`
<p>Welcome ${userAccountsSave}</p>
`

function logout() {
    localStorage.removeItem("user")
  successMessage();
  setTimeout(()=>{
    location.replace("index.html");
    },3000)
}

function successMessage()
{
    swal({
        title: "You have successfully logged out",
        text: "Wait a fiew seconds!",
        icon: "success",
        button: "OK",
      });
}