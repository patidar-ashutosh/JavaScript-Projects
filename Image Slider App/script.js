// get the slide Elements
const slides = document.querySelectorAll('.slide');
// create variable counter which can count the number of images already slide
let counter = 0;

slides.forEach((currentSlide, index) => {
    currentSlide.style.left = `${index * 100}%`;
    // means the first index left=0%, for second image left=100%
});

function goPrev(){
    // if counter is not a nagative value means minus the one from it
    if(counter != 0){
        counter--;
    }

    // call the slideImage function
    slideImage();
}

function goNext(){
    // if counter and slides length-1 are same means the current image show in ui is last image
    // so move start the image from 0 so make counter to 0
    if(counter == slides.length-1){
        counter = 0;
    }
    else{
        // else increase the counter by one
        counter++;
    }

    // call the slideImage function
    slideImage();
}

const slideImage = () => {

    if(counter >= 0){
        slides.forEach( (currentSlide) => {
            // move the image to X direction by counter * 100 %
            // means the image is move on left
            currentSlide.style.transform = `translateX(-${counter * 100}%)`;
        })   
    }
}