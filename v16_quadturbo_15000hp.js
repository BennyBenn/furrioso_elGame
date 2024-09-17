const $_cuerpo_tabla = document.querySelector("#_cuerpo_tabla");
let salidas=[];
let textos = new Set();
let act = 1;

// IMG / _QUEST / TEXTO (N) / PREGUNTA (N) / RESOUESTAS () / R(N)  
function display_text(){
    const $tr = document.createElement("tr");
    let $tTexto=document.createElement("img");
    $tTexto.src=("img/_quest/texto1/texto1.png")
    $tTexto.style.width="100%";
    $tTexto.style.height="100%";
    $_cuerpo_tabla.appendChild($tTexto); 
}

function display_qa(){
    while ($_cuerpo_tabla.firstChild) {
        $_cuerpo_tabla.removeChild($_cuerpo_tabla.firstChild);
    }
     /*
    const $tr = document.createElement("tr");
    let $tTexto=document.createElement("img");
    $tTexto.src=("img/_quest/texto"+act+"/texto1.png")
    $tTexto.style.width="100%";
    $tTexto.style.height="100%";
    $_cuerpo_tabla.appendChild($tTexto); 
    */

}