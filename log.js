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