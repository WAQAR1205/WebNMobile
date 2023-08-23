let slidesIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("carouselone")
    for (i =0; i < 4 ; i++){
        slides[i].style.display = "none";
    }
    slidesIndex++;
    if(slidesIndex > slides.length){slidesIndex = 1}
    slides[slidesIndex-1].style.display = "block";  
setTimeout(showSlides, 5000); // Change image every 5 seconds
}