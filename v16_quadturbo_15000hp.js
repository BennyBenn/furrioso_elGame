function getRandomImage() {
    const imagesFolder = 'img/_backgrounds/';
    const numImages = 10; 
    const randomIndex = Math.floor(Math.random() * numImages) + 1; 
    const randomImage = imagesFolder + randomIndex + '.png'; 
  
    document.body.style.backgroundImage = `url(${randomImage})`; 
  }
  
  
  window.onload = getRandomImage;