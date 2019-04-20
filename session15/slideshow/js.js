var s;
function showSlides() {
    
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
             slides[i].style.display = "none";  
          }
    slides[s].style.display = "block";  
    s++;
    if (s > slides.length - 1) {
        s = 0;
    }    
    setTimeout(showSlides,3000);
}
showSlides(s = 0);