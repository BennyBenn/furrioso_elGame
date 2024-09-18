const $_cuerpo_tabla = document.querySelector("#_cuerpo_tabla");
const $_cuerpo_mona = document.querySelector("#_mona_china");
var nameUser = document.getElementById("_nombre_user");
let numeroAct = 0;
let puntaje=0;
var nombre = "";
let tiempoLimite = 5; 
let tiempoTranscurrido = 0; 
let temporizador;
let temporizadorElement = document.getElementById("temporizador"); 

let selectedButton = null; 
let textoIndex = 1; 
let limiteTextos = 5;
let puntos = 0; 
let puntosLabel = document.getElementById("_puntuacion_user"); 
const $_tempo = document.querySelector("#temporizador");
let mona=2;


function monas(){
    limpiar_monas();
    //limpiar()
    //iniciarTemporizador();
    const $tr = document.createElement("tr");
    let $tMona = document.createElement("img");

    const numImages = 18;
    const randomIndex = Math.floor(Math.random() * numImages) + 1;

    $tMona.src = ("img/_girl/_porttrait/a("+randomIndex+").png")
    $tMona.style.width = "100%";
    $tMona.style.height = "100%";
    //$tMona.style.justifyContent = "space-around";
    $tMona.style.alignItems = "right";
    $_cuerpo_mona.appendChild($tr);
    $_cuerpo_mona.appendChild($tMona);
    mona++;
}

///////////////////////////////////////////////////////////
function guardarNombre() {
    nombre = document.getElementById("textbox").value;
    localStorage.setItem('nombre',nombre);
    if (nombre === "")  alert("Por favor ingresa un nombre");
     else {
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
}
window.onload = getRandomImage;

function iniciarTemporizador() {
    temporizador = setInterval(function () {
        tiempoTranscurrido++;
        temporizadorElement.innerHTML = `Tiempo transcurrido: ${tiempoTranscurrido} segundos`; 
        console.log(`Tiempo transcurrido: ${tiempoTranscurrido} segundos`);
        if (tiempoTranscurrido >= tiempoLimite) {
            clearInterval(temporizador); 
            tiempoTranscurrido = 0;
        }
    }, 1000); 
    tiempoTranscurrido = 0;
}

function display_text() {
    console.log(textoIndex);
    console.log("Acaba de imprimir el texto numero: "+textoIndex);
    if(textoIndex === limiteTextos) textoIndex=1;    
    $_tempo.style.display="";    
    monas();
    limpiar()
    iniciarTemporizador();
    const $tr = document.createElement("tr");
    let $tTexto = document.createElement("img");
    $tTexto.src = ("img/_quest/texto" + textoIndex + "/texto" + textoIndex + ".png")
    $tTexto.style.width = "100%";
    $tTexto.style.height = "100%";
    $_cuerpo_tabla.appendChild($tTexto);
    numeroAct=1;
    setTimeout(function () {        
        display_qa();
    }, 5000)    
}

function limpiar() {
    while ($_cuerpo_tabla.firstChild) $_cuerpo_tabla.removeChild($_cuerpo_tabla.firstChild);
}

function limpiar_monas() {
    while ($_cuerpo_mona.firstChild) $_cuerpo_mona.removeChild($_cuerpo_mona.firstChild);
}

function siguente_p() {
    limpiar();
    if(textoIndex === limiteTextos) textoIndex=1;
    else textoIndex++;
    numeroAct = 1;
    display_text();
}

function siguiente_text(){
    limpiar();
    numeroAct++ <
    display_text();
}

function display_qa() {
    //$_tempo.style.display="";
    limpiar(); 
    const $tr = document.createElement("tr"); 

    console.log("texto index:" + textoIndex+ "numeroAct:" +numeroAct);

    let $tPregunta = document.createElement("img");
    $tPregunta.src = "img/_quest/texto" + textoIndex + "/pregunta " + numeroAct + "/p" + numeroAct + ".png";
    $tPregunta.style.width = "100%";
    $tPregunta.style.height = "100%";

    $_cuerpo_tabla.appendChild($tr);
    $_cuerpo_tabla.appendChild($tPregunta);
    $_cuerpo_tabla.appendChild($tr);

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

function createAnswerButton(imageSrc, answerNumber) {
    let $button = document.createElement("button");
    $button.style.width = "100%";
    $button.style.height = "20%";
    $button.style.padding = "0"; 
    $button.style.border = "none"; 
    $button.style.backgroundColor = "transparent"; 

    let $img = document.createElement("img");
    $img.src = imageSrc;
    $img.style.width = "100%";
    $img.style.height = "100%";
    //$img.style.justifyContent = "space-between";

    $button.appendChild($img);

    $button.addEventListener("click", function() {
        handleAnswerClick($button, answerNumber);  
    });
    return $button;
}

function handleAnswerClick(buttonElement, answerNumber) {
    const buttons = document.querySelectorAll("button"); 
    buttons.forEach(button => {
        button.style.border = "none"; 
    });
    if (answerNumber === 2) {
        buttonElement.style.border = "5px solid green"; 
        puntos += 100; 
        puntosLabel.innerText = "Puntos: " + puntos; 
        if (numeroAct >= 4) {textoIndex++; display_text();    }
        else display_qa();        
    } else buttonElement.style.border = "5px solid red"; 
    numeroAct++;
    selectedButton = buttonElement;
    display_qa()
}

display_text();