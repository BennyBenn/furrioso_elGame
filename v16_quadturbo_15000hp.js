const $_cuerpo_tabla = document.querySelector("#_cuerpo_tabla");
let numeroAct = 1;

let tiempoLimite = 5; // tiempo límite en segundos
let tiempoTranscurrido = 0; // tiempo transcurrido en segundos
let temporizador;
let temporizadorElement = document.getElementById("temporizador"); // elemento 

function iniciarTemporizador() {
    temporizador = setInterval(function () {
        tiempoTranscurrido++;
        temporizadorElement.innerHTML = `Tiempo transcurrido: ${tiempoTranscurrido} segundos`; // actualiza el elemento HTML
        console.log(`Tiempo transcurrido: ${tiempoTranscurrido} segundos`);
        if (tiempoTranscurrido >= tiempoLimite) {
            clearInterval(temporizador); // detiene el temporizador
            tiempoTranscurrido=0;
            //alert(`Tiempo límite alcanzado! (${tiempoLimite} segundos)`);
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

function display_qa() {
    limpiar()
    const $tr = document.createElement("tr");

    let $tPregunta = document.createElement("img");
    $tPregunta.src = ("img/_quest/texto" + numeroAct + "/pregunta " + numeroAct + "/p" + numeroAct + ".png")
    $tPregunta.style.width = "100%";
    $tPregunta.style.height = "100%";

    $_cuerpo_tabla.appendChild($tr);
    $_cuerpo_tabla.appendChild($tPregunta);
    $_cuerpo_tabla.appendChild($tr);

    ////////////

    let $tRes1 = document.createElement("img");
    $tRes1.src = ("img/_quest/texto" + numeroAct + "/pregunta " + numeroAct + "/respuestas/r1.png")
    $tRes1.style.width = "100%";
    $tRes1.style.height = "20%";

    $_cuerpo_tabla.appendChild($tRes1);
    $_cuerpo_tabla.appendChild($tr);

    let $tRes2 = document.createElement("img");
    $tRes2.src = ("img/_quest/texto" + numeroAct + "/pregunta " + numeroAct + "/respuestas/r2.png")
    $tRes2.style.width = "100%";
    $tRes2.style.height = "20%";

    $_cuerpo_tabla.appendChild($tRes2);
    $_cuerpo_tabla.appendChild($tr);

    let $tRes3 = document.createElement("img");
    $tRes3.src = ("img/_quest/texto" + numeroAct + "/pregunta " + numeroAct + "/respuestas/r3.png")
    $tRes3.style.width = "100%";
    $tRes3.style.height = "20%";

    $_cuerpo_tabla.appendChild($tRes3);
    $_cuerpo_tabla.appendChild($tr);

    let $tRes4 = document.createElement("img");
    $tRes4.src = ("img/_quest/texto" + numeroAct + "/pregunta " + numeroAct + "/respuestas/r4.png")
    $tRes4.style.width = "100%";
    $tRes4.style.height = "20%";

    $_cuerpo_tabla.appendChild($tRes4);
    $_cuerpo_tabla.appendChild($tr);

}





///////////////////////////////////////////////////////////
let nombre;

        function guardarNombre() {
            nombre = document.getElementById("textbox").value;
            if (nombre === "") {
                alert("por favor ingresa un nombre");
            } else {
                let audio = document.getElementById("audio");
                audio.play();
                audio.onended = function() {
                    window.location.href = "furroso.html";
                };
             }
          
        }

        function getRandomImage() {
            const imagesFolder = 'img/_backgrounds/';
            const numImages = 10; 
            const randomIndex = Math.floor(Math.random() * numImages) + 1; 
            const randomImage = imagesFolder + randomIndex + '.png'; 
          
            document.body.style.backgroundImage = `url(${randomImage})`; 
          }
          
          
          window.onload = getRandomImage;