
let loginButton = document.getElementById("login");
loginButton.addEventListener("click",function(e){
    e.preventDefault();
});
loginButton.addEventListener("click",()=>{
    changeRoute("home")
});