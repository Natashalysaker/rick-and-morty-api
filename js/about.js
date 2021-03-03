const aboutText = document.querySelector(".about");
const about = aboutText.innerHTML;

setTimeout (function(){ 
    const changedWord = about.replace(/the/g, "replaced").replace(/The/g, "Replaced");
    aboutText.innerHTML = changedWord; 
}, 4000)

// Changed the h1 title
const h1Text = document.querySelector("h1");
const h1 = h1Text.innerHTML;

setTimeout (function(){ 
    const changedWord = h1.replace(/the/g, "replaced").replace(/The/g, "Replaced");
    h1Text.innerHTML = changedWord; 
}, 4000);






 
  