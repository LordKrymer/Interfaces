window.addEventListener('DOMContentLoaded',function(){initialize()})

document.getElementById("logo").addEventListener("click",()=>{
    fetchFile("home");
    routUrl("home");
});

document.getElementById("loginButton").addEventListener("click",()=>{
    fetchFile("logIn");
    routUrl("logIn");
});

function initialize(){
    fetchFile("logIn");
    routUrl("logIn"); 
}

async function fetchFile(ruta){ 
    let promise = await fetch("html/"+ruta+".html");
    let contenedor = document.getElementById("index");
    let contenido  = await promise.text();
    contenedor.innerHTML = contenido;
    contenedor.append(inyectionJs(ruta));
}

function inyectionJs(route){
    let script = document.createElement("script");
    script.src = "js/"+route+".js";
    script.async = true;
    return script;
}

function routUrl(ruta){// muestra la ruta url
    history.pushState({page:ruta+".html"},"index","/"+ruta);
}

function changeRoute(ruta){
    fetchFile(ruta);
    routUrl(ruta);
}

window.addEventListener('popstate', function(){
    fetchFile(history.state.page);
});

document.querySelector('.hamburger-button').addEventListener('click', deployMenu);

function deployMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  
window.onclick = function(event) {
  if (!event.target.matches('.hamburger-button')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
