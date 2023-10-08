window.addEventListener('DOMContentLoaded',function(){inicializar()})

document.getElementById("logo").addEventListener("click",()=>{
    fetchArchivo("home");
    rutaUrl("home");
});

document.getElementById("loginButton").addEventListener("click",()=>{
    fetchArchivo("logIn");
    rutaUrl("logIn");
});

function inicializar(){
    fetchArchivo("logIn");
    rutaUrl("logIn"); 
}

async function fetchArchivo(ruta){ 
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

function rutaUrl(ruta){// muestra la ruta url
    history.pushState({page:ruta+".html"},"index","/"+ruta);
}

function changeRoute(ruta){
    fetchArchivo(ruta);
    rutaUrl(ruta);
}

window.addEventListener('popstate', function(){
    fetchArchivo(history.state.page);
    inicializarContacto(this.history.state.page);
});


