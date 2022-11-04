const images = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

const sliderImgEl = document.querySelector(".sliderImg");
const btnNext = document.getElementById("slider-btn-next");
const btnPrev = document.getElementById("slider-btn-prev");

let currentImgindex = 0;

sliderImgEl.src = images[ currentImgindex ];

btnNext.addEventListener("click", function() {
    console.log("Next btt click");
    currentImgindex++;
    const ultimoIndiceDisponibile = images.length - 1;
    if ( currentImgindex > ultimoIndiceDisponibile){
        currentImgindex = ultimoIndiceDisponibile;
    }
    sliderImgEl.src = images[ currentImgindex ];
});

btnPrev.addEventListener("click", function() {
    console.log("Prev btt click");
    currentImgindex--;
    if ( currentImgindex < 0 ){
        currentImgindex = 0;
    }
    sliderImgEl.src = images[ currentImgindex ];
});

function ciao(){
    alert("Belin");
}