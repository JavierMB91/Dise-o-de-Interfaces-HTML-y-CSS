//crear un array con frases

const frases = [
    "Te va a tocar la loteria",
    "Tira otra vez",
    "No salgas hoy",
    "Una sorpresa te espera en tu casa",
    "Te van a subir el sueldo"
]

//seleccionar elemento del DOM
let parrafo = document.getElementById("txtResultado")


//crear evento para capturar cuando el usuario hace click en el boton
let boton = document.getElementById("botonsuerte")

//añadir evento al boton
boton.addEventListener("click", mostrarFrase)


//crear una funcion que deuvelva uno de los elementos del array
function mostrarFrase(){
    let indice = Math.random() * frases.length
    indice = Math.floor(indice)

    parrafo.innerText = frases[indice]
}