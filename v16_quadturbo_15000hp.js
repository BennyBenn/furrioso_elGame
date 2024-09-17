const $_cuerpo_tabla = document.querySelector("#_cuerpo_tabla");
let salidas=[];

function display_text(){
    const $tr = document.createElement("tr");
    let $tTexto=document.createElement("img");
    $tTexto.src=("img/_quest/texto1/texto1.png")
    $tTexto.style.width="100%";
    $tTexto.style.height="100%";
    $_cuerpo_tabla.appendChild($tTexto); 
}

function display_qa(){
    
}