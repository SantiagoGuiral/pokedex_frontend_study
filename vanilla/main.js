//Main.js only used to demonstrate how to implement an event listener
//The functionality of this file was replaced with CSS properties

const images = document.querySelectorAll(".pokemon-image-link");

images.forEach((image) => {
    image.addEventListener("mouseover", (e) => {
        image.setAttribute('style', 'border: 1px solid #000');

        setTimeout(() => {
            image.setAttribute('style', 'border: none');
        }, 500);
    })
});
