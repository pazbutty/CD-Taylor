/** 
 * Primera imagen: cuando el usuario hace click, alerta de bienvenida
 * Definir función: "welcome", mensaje de alerta "bienvenida"
 * Obtener el primer elemento de la lista y guardarlo en una variable
 * Asignar un listener a la variable cuando el usuario hace click
 */

function welcome(message) {
    console.log(message)
    alert(message)
}

messageTaylorSwift = "Welcome!\nThis is Taylor Swift."
messageFearless = "Welcome!\nThis is Fearless."
messageSpeakNow = "Welcome!\nThis is Speak Now."

function welcomeTaylorSwift() {
    welcome(messageTaylorSwift)
}
firstAlbum = document.querySelector("body .album:nth-child(1)")
firstAlbum.addEventListener("click", welcomeTaylorSwift)

function welcomeFearless() {
   welcome(messageFearless)
}
firstAlbum = document.querySelector("body .album:nth-child(2)")
firstAlbum.addEventListener("click", welcomeFearless)

function welcomeSpeakNow() {
    welcome(messageSpeakNow)
 }
 firstAlbum = document.querySelector("body .album:nth-child(3)")
 firstAlbum.addEventListener("click", welcomeSpeakNow)