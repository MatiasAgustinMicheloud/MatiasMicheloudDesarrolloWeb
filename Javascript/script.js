function mostrarMensaje(parametro){
    parametro.preventDefault();
    var mensaje = document.querySelector("#texto").value;
    document.querySelector("h1").textContent = mensaje;
    console.log(mensaje);
}

var formulario = document.querySelector("#formulario");
formulario.addEventListener("input", mostrarMensaje)