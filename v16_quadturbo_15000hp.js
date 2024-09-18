const $_cuerpo_tabla = document.querySelector("#_cuerpo_tabla");
var nameUser = document.getElementById("_nombre_user");
let numeroAct = 1;
var nombre = "";
let tiempoLimite = 6; // tiempo límite en segundos
let tiempoTranscurrido = 0; // tiempo transcurrido en segundos
let temporizador;
let temporizadorElement = document.getElementById("temporizador"); // elemento 

///////////////////////////////////////////////////////////
function guardarNombre() {
    nombre = document.getElementById("textbox").value;
    localStorage.setItem('nombre',nombre);
    if (nombre === "") {
        alert("Por favor ingresa un nombre");
    } else {
        let audio = document.getElementById("audio");
        audio.play();
        audio.onended = function () {
            window.location.href = "furroso.html"            
        };
    }
}
var name = localStorage.getItem('nombre');
nameUser.innerHTML = name;

function getRandomImage() {
    const imagesFolder = 'img/_backgrounds/';
    const numImages = 10;
    const randomIndex = Math.floor(Math.random() * numImages) + 1;
    const randomImage = imagesFolder + randomIndex + '.png';
    //document.body.style.backgroundImage = url(`${randomImage}`);
}
window.onload = getRandomImage;

function iniciarTemporizador() {
    temporizador = setInterval(function () {
        tiempoTranscurrido++;
        temporizadorElement.innerHTML = `Tiempo transcurrido: ${tiempoTranscurrido} segundos`; // actualiza el elemento HTML
        console.log(`Tiempo transcurrido: ${tiempoTranscurrido} segundos`);
        if (tiempoTranscurrido >= tiempoLimite) {
            clearInterval(temporizador); // detiene el temporizador
            tiempoTranscurrido = 0;
            //alert(Tiempo límite alcanzado! (${tiempoLimite} segundos));
        }
    }, 1000); // ejecuta la función cada 1 segundo (1000 milisegundos)
}

function display_text() {
    limpiar()
    iniciarTemporizador();
    const $tr = document.createElement("tr");
    let $tTexto = document.createElement("img");
    $tTexto.src = ("img/_quest/texto" + numeroAct + "/texto" + numeroAct + ".png")
    $tTexto.style.width = "100%";
    $tTexto.style.height = "100%";
    $_cuerpo_tabla.appendChild($tTexto);
    setTimeout(function () {
        display_qa();
    }, 15000)

    //display_qa();
    /*$tTexto.src=("img/_quest/texto"+numeroAct+"/texto"+numeroAct+".png")
    $tTexto.style.width="100%";
    $tTexto.style.height="100%";
    $_cuerpo_tabla.appendChild($tTexto);*/
}

function limpiar() {
    while ($_cuerpo_tabla.firstChild) {
        $_cuerpo_tabla.removeChild($_cuerpo_tabla.firstChild);
    }
}

function siguente_p() {
    limpiar();
    numeroAct++ <
        display_text();
}

let selectedButton = null; // Variable para guardar el botón seleccionado

function display_qa() {
    limpiar();
    const $tr = document.createElement("tr");

    let $tPregunta = document.createElement("img");
    $tPregunta.src = "img/_quest/texto" + numeroAct + "/pregunta " + numeroAct + "/p" + numeroAct + ".png";
    $tPregunta.style.width = "100%";
    $tPregunta.style.height = "100%";

    $_cuerpo_tabla.appendChild($tr);
    $_cuerpo_tabla.appendChild($tPregunta);
    $_cuerpo_tabla.appendChild($tr);

 
    let $buttonRes1 = createAnswerButton("img/_quest/texto" + numeroAct + "/pregunta " + numeroAct + "/respuestas/r1.png", 1);
    $_cuerpo_tabla.appendChild($buttonRes1);
    $_cuerpo_tabla.appendChild($tr);

  
    let $buttonRes2 = createAnswerButton("img/_quest/texto" + numeroAct + "/pregunta " + numeroAct + "/respuestas/r2.png", 2);
    $_cuerpo_tabla.appendChild($buttonRes2);
    $_cuerpo_tabla.appendChild($tr);

   
    let $buttonRes3 = createAnswerButton("img/_quest/texto" + numeroAct + "/pregunta " + numeroAct + "/respuestas/r3.png", 3);
    $_cuerpo_tabla.appendChild($buttonRes3);
    $_cuerpo_tabla.appendChild($tr);

  
    let $buttonRes4 = createAnswerButton("img/_quest/texto" + numeroAct + "/pregunta " + numeroAct + "/respuestas/r4.png", 4);
    $_cuerpo_tabla.appendChild($buttonRes4);
    $_cuerpo_tabla.appendChild($tr);
}

// Función para crear un botón con una imagen
function createAnswerButton(imageSrc, answerNumber) {
    let $button = document.createElement("button");
    $button.style.width = "100%";
    $button.style.height = "20%";
    $button.style.padding = "0"; 
    $button.style.border = "none"; // Quita el borde por defecto del botón
    $button.style.backgroundColor = "transparent";

    let $img = document.createElement("img");
    $img.src = imageSrc;
    $img.style.width = "100%";
    $img.style.height = "100%";

    $button.appendChild($img);

    // Agregar evento de clic al botón
    $button.addEventListener("click", function() {
        handleAnswerClick($button, answerNumber);  // Llamar función para manejar el clic
    });

    return $button;
}


function handleAnswerClick(buttonElement, answerNumber) {
   
    if (selectedButton) {
        selectedButton.style.border = "";  // Eliminar cualquier borde del botón previamente seleccionado
    }

    // Establecer el nuevo botón seleccionado
    selectedButton = buttonElement;
    selectedButton.style.border = "5px solid green";  // Agregar un borde verde 


}
