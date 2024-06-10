const dynamicText = document.querySelector("h1 span");
const words = ["Developer", "Problem Solver", "Reader", "Writer", "Pianist"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        //if condition is ture type th next character
        charIndex++;
        setTimeout(typeEffect, 200);
    }
    else if (isDeleting && charIndex > 0) {
        //if condition is true,remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    }
    else {
        isDeleting = !isDeleting;
        dynamicText.classList.add("stop-blinking");

        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);


    }
}
typeEffect();

document.addEventListener("scroll", function(){
    const header=document.querySelector("header");

    if(window.scrollX>0){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }

    
})

