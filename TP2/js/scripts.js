window.addEventListener('DOMContentLoaded',function(){inicializar()})
console.log("el que lee esto es puto");

function inicializar(){
    fetchArchivo("logIn.html");
    rutaUrl("logIn.html"); 
}

async function fetchArchivo(ruta){ 
    let promise = await fetch("html/"+ruta);
    let contenedor = document.getElementById("index");
    let contenido  = await promise.text();
    contenedor.innerHTML = contenido;
}

function rutaUrl(ruta){// muestra la ruta url
    history.pushState({page:ruta},"index","/"+ruta);
}

window.addEventListener('popstate', function(){
    fetchArchivo(history.state.page);
    inicializarContacto(this.history.state.page);
});


