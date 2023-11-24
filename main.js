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
messageRed = "Welcome!\nThis is Red."
message1989 = "Welcome!\nThis is 1989."
messageReputation = "Welcome!\nThis is Reputation."
messageLover = "Welcome!\nThis is Lover."
messageFolklore = "Welcome!\nThis is Folklore."
messageEvermore = "Welcome!\nThis is Evermore."
messageMidnights = "Welcome!\nThis is Midnights."


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

 function welcomeRed() {
    welcome(messageRed)
 }
 firstAlbum = document.querySelector("body .album:nth-child(4)")
 firstAlbum.addEventListener("click", welcomeRed)

 function welcome1989() {
    welcome(message1989)
 }
 firstAlbum = document.querySelector("body .album:nth-child(5)")
 firstAlbum.addEventListener("click", welcome1989)

 function welcomeReputation() {
    welcome(messageReputation)
 }
 firstAlbum = document.querySelector("body .album:nth-child(6)")
 firstAlbum.addEventListener("click", welcomeReputation)

 function welcomeLover() {
    welcome(messageLover)
 }
 firstAlbum = document.querySelector("body .album:nth-child(7)")
 firstAlbum.addEventListener("click", welcomeLover)

 function welcomeFolklore() {
    welcome(messageFolklore)
 }
 firstAlbum = document.querySelector("body .album:nth-child(8)")
 firstAlbum.addEventListener("click", welcomeFolklore)
 
 function welcomeEvermore() {
    welcome(messageEvermore)
 }
 firstAlbum = document.querySelector("body .album:nth-child(9)")
 firstAlbum.addEventListener("click", welcomeEvermore)

 function welcomeMidnights() {
    welcome(messageMidnights)
 }
 firstAlbum = document.querySelector("body .album:nth-child(10)")
 firstAlbum.addEventListener("click", welcomeMidnights)
