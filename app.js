// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Seleccionamos los elementos del dom con los que vamos a interactuar
let nombreNuevoParticipante = document.querySelector("#amigo");
let lista = document.querySelector("#listaAmigos");
let resultado = document.querySelector("#resultado");

//Creamos un arreglo donde almacenaremos los nombres de los participantes a sortear
let amigos = [];

//Creamos la funcion que nos permitira agregar un amigo a la lista
function agregarAmigo(){
    

    //validamos que el campo que deberia tener un nombre,no este vacio
    if(nombreNuevoParticipante.value == ""){
       alert("Por favor ingrese un nombre valido");
    }else{
        lista.innerHTML = "";
        //Lo agregamos a la lista
        amigos.push(nombreNuevoParticipante.value);
        //Recorremos cada elemento de la lista y lo insertamos en el html
        amigos.forEach((e)=>{
            lista.innerHTML += `<li>${e}<li/>`;
        })

        //Limpiamos el input
        nombreNuevoParticipante.value = "";

    }

}

//Creamos la funcion que nos permitira sortear un amigo al azar
function sortearAmigo(){
    //Validamos que ya esten agregados a lo menos 2 participantes,para poder simular un sorteo
    if(amigos.length < 2){
        return  amigos.length == 0 ? alert("Aun no has añadido ningun amigo") : alert("Debes agregar mas de una persona para sortear");;
    }else{

        lista.innerHTML = "";
        //Generamos un numero random para luego usarlo como posicion en nuestra lista y asi seleccionar un nombre
        let numero = Math.floor(Math.random() * amigos.length);
        //Mostramos en nuestro html el nombre seleccionado.
        resultado.innerHTML = `El amigo secreto sorteado es : ${amigos[numero]}`;

    }
  
}
