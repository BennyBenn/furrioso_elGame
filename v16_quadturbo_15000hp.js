const $_cuerpo_tabla = document.querySelector("#_cuerpo_tabla");
var nameUser = document.getElementById("_nombre_user");
let numeroAct = 1;
let numeroAct1 = 1;
let puntaje=0;
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
let textoIndex = 1; // Variable para controlar el texto o sección actual
let puntos = 0; // Variable para acumular puntos
let puntosLabel = document.getElementById("_puntuacion_user"); // Label para mostrar los puntos acumulados

// Función para mostrar preguntas y respuestas en la tabla
function display_qa() {
    limpiar(); // Limpia cualquier contenido previo en la tabla
    const $tr = document.createElement("tr"); // Crea una nueva fila para la tabla

    // Crear y agregar la imagen de la pregunta
    let $tPregunta = document.createElement("img");
    $tPregunta.src = "img/_quest/texto" + textoIndex + "/pregunta " + numeroAct + "/p" + numeroAct + ".png";
    $tPregunta.style.width = "100%";
    $tPregunta.style.height = "100%";

    $_cuerpo_tabla.appendChild($tr);
    $_cuerpo_tabla.appendChild($tPregunta);
    $_cuerpo_tabla.appendChild($tr);

    // Crear y agregar botones de respuesta
    let $buttonRes1 = createAnswerButton("img/_quest/texto" + textoIndex + "/pregunta " + numeroAct + "/respuestas/r1.png", 1);
    $_cuerpo_tabla.appendChild($buttonRes1);
    $_cuerpo_tabla.appendChild($tr);

    let $buttonRes2 = createAnswerButton("img/_quest/texto" + textoIndex + "/pregunta " + numeroAct + "/respuestas/r2.png", 2);
    $_cuerpo_tabla.appendChild($buttonRes2);
    $_cuerpo_tabla.appendChild($tr);

    let $buttonRes3 = createAnswerButton("img/_quest/texto" + textoIndex + "/pregunta " + numeroAct + "/respuestas/r3.png", 3);
    $_cuerpo_tabla.appendChild($buttonRes3);
    $_cuerpo_tabla.appendChild($tr);

    let $buttonRes4 = createAnswerButton("img/_quest/texto" + textoIndex + "/pregunta " + numeroAct + "/respuestas/r4.png", 4);
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
    $button.style.backgroundColor = "transparent"; // Hace que el fondo sea transparente

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

// Función para manejar el clic en un botón de respuesta
function handleAnswerClick(buttonElement, answerNumber) {
    // Recorre todos los botones y elimina el borde si no están seleccionados
    const buttons = document.querySelectorAll("button"); // Selecciona todos los botones
    buttons.forEach(button => {
        button.style.border = "none"; // Elimina el borde de todos los botones
    });

    // Agregar un borde verde o rojo según la respuesta seleccionada
    if (answerNumber === 2) {
        buttonElement.style.border = "5px solid green"; // Borde verde para la respuesta 2
        puntos += 100; // Acumular puntos por la respuesta correcta
        puntosLabel.innerText = "Puntos: " + puntos; // Mostrar puntos en el label

        // Incrementar el número de la pregunta y manejar el avance
        numeroAct++; // Incrementar el número de la pregunta

        // Si el número de la pregunta es mayor que 4, avanzar al siguiente texto
        if (numeroAct > 4) {
            numeroAct = 1; // Reiniciar el número de la pregunta
            textoIndex++; // Avanzar al siguiente texto o sección
        }

        display_qa(); // Mostrar la siguiente pregunta
    } else {
        buttonElement.style.border = "5px solid red"; // Borde rojo para otras respuestas
    }

    // Actualiza el botón seleccionado
    selectedButton = buttonElement;
}

// Inicializar la primera pregunta
display_qa();