// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreNuevoParticipante = document.querySelector("#amigo");
let lista = document.querySelector("#listaAmigos");
let resultado = document.querySelector("#resultado");

let amigos = [];
function agregarAmigo(){
    lista.innerHTML = "";

    if(nombreNuevoParticipante.value == ""){
       alert("Por favor ingrese un nombre valido");
    }else{
        
        amigos.push(nombreNuevoParticipante.value);

        amigos.forEach((e)=>{
            lista.innerHTML += `<li>${e}<li/>`;
        })

        nombreNuevoParticipante.value = "";
        console.log("Lista de amigos",amigos);
    }

}


function sortearAmigo(){

    if(amigos.length < 1){
        alert("Aun no has añadido ningun amigo");
        return;
    }else{

        lista.innerHTML = "";

        let numero = Math.floor(Math.random() * amigos.length);
        
        resultado.innerHTML = `${amigos[numero]}`;
        console.log("Lista despues de sortear",amigos);
    }
  
}
