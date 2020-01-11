//  pick all of the images and layer them based on the z-index

const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// keep track of two things:
let currentSlide = 0;
let z = 1;

// when i click the slide area, change the slide based on z index 
slideArea.addEventListener("click", function () {
    currentSlide += 1;
    z += 1;

    // pick the right image 
    images[currentSlide].style.zIndex = z;

});