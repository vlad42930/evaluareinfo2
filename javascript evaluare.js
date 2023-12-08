var button = document.getElementById("button");
var nume = document.getElementById("nume");
var prenume = document.getElementById("prenume");
var img = document.getElementById("imagine");
var body = document.getElementById("body");


document.addEventListener("DOMContentLoaded", function () {
  var slideIndex = 0;
  var slides = document.getElementsByClassName("mySlides");
  var intervalId;

  function showSlides() {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
  }

  function plusSlides(n) {
    clearInterval(intervalId);
    slideIndex += n;

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    } else if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    showSlides();
    startInterval();
  }

  function startInterval() {
    intervalId = setInterval(function () {
      plusSlides(1);
    }, 3000);
  }

  function startSlideshow() {
    var slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.style.display = 'flex';
    showSlides();
    startInterval();
  }

  function showStaticImages() {
    var slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.style.display = 'block';

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
    }
  }

  showStaticImages();

  var myText = document.getElementById("myText");
  myText.addEventListener("dblclick", function () {
    startSlideshow();
  });
});





