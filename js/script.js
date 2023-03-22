location.href = "#";

function callHome() {
    location.href = "#";
}

function callAboutUs() {
    location.href = "#about";
}

function callImageSlider() {
    location.href = "#image";
}

function callServices() {
    location.href = "#service";
}


// Image Slider using javascript
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    
    // if your n (slideIndex) is become grater than Slides array length than set slideIndex to 1.
    if(n>slides.length) {
        slideIndex = 1;
    }

    // if your n (slideIndex) is become negative then set it to slides length
    if(n<1) {
        slideIndex = slides.length;
    }

    for(let i=0; i<slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slides[slideIndex-1].style.display = "block";
}