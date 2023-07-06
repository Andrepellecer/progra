function iniciarjuego(){
    let buttonmascotajudador =document.getElementById("boton-pokemon")
    buttonmascotajudador.addEventListener("click",seleccionarmascotajugador)
}

function seleccionarmascotajugador(){
    let inputcharmander = document.getElementById("charmander")
    let inputbulbasaur= document.getElementById("bulbasaur")
    let inputsquirtle = document.getElementById("squirtle")
    if(inputcharmander.checked){
     alert("Elejiste Charmander") 
    } else if (inputbulbasaur.checked){
     alert("Elejiste bulbasaur ")
    } else if (inputsquirtle.checked){
      alert("Elejiste squirtle")  
    } else { alert("escoge un pokemon")

    } 
}

window.addEventListener("load", iniciarjuego)
