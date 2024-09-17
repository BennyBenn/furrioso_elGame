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
       