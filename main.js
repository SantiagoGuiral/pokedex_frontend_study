const images = document.querySelectorAll(".pokemon-image-link");

images.forEach((image) => {
    image.addEventListener("mouseover", (e) => {
        image.setAttribute('style', 'border: 1px solid #000');

        setTimeout(() => {
            image.setAttribute('style', 'border: none');
        }, 500);
    })
});