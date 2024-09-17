const $_cuerpo_tabla = document.querySelector("#_cuerpo_tabla");
let salidas=[];

function display_text(){
    limpiar()

    const $tr = document.createElement("tr");
    let $tTexto=document.createElement("img");
    $tTexto.src=("img/_quest/texto1/texto1.png")
    $tTexto.style.width="100%";
    $tTexto.style.height="100%";
    $_cuerpo_tabla.appendChild($tTexto); 
}

function limpiar(){
    while ($_cuerpo_tabla.firstChild) {
        $_cuerpo_tabla.removeChild($_cuerpo_tabla.firstChild);
    }
}

function display_qa(){    
    limpiar()

    const $tr = document.createElement("tr");

    let $tPregunta=document.createElement("img");
    $tPregunta.src=("img/_quest/texto1/pregunta 1/p1.png")
    $tPregunta.style.width="100%";
    $tPregunta.style.height="100%";

    $_cuerpo_tabla.appendChild($tr); 
    $_cuerpo_tabla.appendChild($tPregunta);
    $_cuerpo_tabla.appendChild($tr); 
    
    ////////////

    let $tRes1=document.createElement("img");
    $tRes1.src=("img/_quest/texto1/pregunta 1/respuestas/r1.png")
    $tRes1.style.width="100%";
    $tRes1.style.height="20%";

    $_cuerpo_tabla.appendChild($tRes1);
    $_cuerpo_tabla.appendChild($tr); 

    let $tRes2=document.createElement("img");
    $tRes2.src=("img/_quest/texto1/pregunta 1/respuestas/r2.png")
    $tRes2.style.width="100%";
    $tRes2.style.height="20%";

    $_cuerpo_tabla.appendChild($tRes2);
    $_cuerpo_tabla.appendChild($tr);

    let $tRes3=document.createElement("img");
    $tRes3.src=("img/_quest/texto1/pregunta 1/respuestas/r3.png")
    $tRes3.style.width="100%";
    $tRes3.style.height="20%";

    $_cuerpo_tabla.appendChild($tRes3);
    $_cuerpo_tabla.appendChild($tr);

    let $tRes4=document.createElement("img");
    $tRes4.src=("img/_quest/texto1/pregunta 1/respuestas/r4.png")
    $tRes4.style.width="100%";
    $tRes4.style.height="20%";

    $_cuerpo_tabla.appendChild($tRes4);
    $_cuerpo_tabla.appendChild($tr);

}