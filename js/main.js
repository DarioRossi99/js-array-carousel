const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

const sliderImgEl = document.querySelector(".sliderImg");
const btnNext = document.getElementById("slider-btn-next");
const btnPrev = document.getElementById("slider-btn-prev");

let currentImgindex = 0

sliderImgEl.src = images[ currentImgindex ];

btnNext.addEventListener("click", function() {
    console.log("Next btt click");

    currentImgindex--
});

btnPrev.addEventListener("click", function() {
    console.log("Prev btt click");

    currentImgindex++
});
