/* Home Image Slide */
var Curr_slide = 0;
const imags = document.querySelectorAll(".imgh");
const dots = document.querySelectorAll(".dot");

function SlideShow(index) {
  imags.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
  dots.forEach((dot, i) => {
    dot.className = dot.className.replace(" active", "");
    if (i === index) dot.className += " active";
  });
}

function changeSlide(n) {
  Curr_slide = (Curr_slide + n + imags.length) % imags.length;
  SlideShow(Curr_slide);
}

function autoSlide() {
  Curr_slide = (Curr_slide + 1) % imags.length;
  SlideShow(Curr_slide);
}

function setSlide(n) {
  Curr_slide = n - 1;
  SlideShow(Curr_slide);
}


//feature section

function showText(product) {
    var key1Img = document.getElementById("key1");
    var mou1Img = document.getElementById("mou1");
    var textDetails = document.getElementById("text_details");
    var btnLearnMore = document.getElementById("btn_learnMore");
    var learnMoreLink = btnLearnMore.querySelector("a")

    
    key1Img.classList.remove("hidden", "selected");
    mou1Img.classList.remove("hidden", "selected");
    textDetails.style.display = "none"; 
    btnLearnMore.style.display = "none";

   
    if (product === 'kbfe') {
        textDetails.innerHTML = "<p>Experience unmatched performance and style with the Hellblaze K85.<br> Experience unmatched performance and style with the Hellblaze K85, a cutting-edge keyboard designed for gamers, coders, and creators. Featuring dynamic RGB backlighting with customizable effects, it illuminates your workspace with vibrant colors. Its ultra-responsive mechanical keys deliver lightning-fast typing and gaming precision, while the sleek, ergonomic design ensures comfort during extended use. Built for durability and intense performance, the Hellblaze K85 is more than a keyboard—it's your ultimate tool for success.</p>";
        textDetails.style.color = "#9578a4";
        textDetails.style.display = "flex";
        btnLearnMore.style.display = "flex";
        learnMoreLink.href = "keyboard.html"
        key1Img.classList.add("selected");
    } else if (product === 'mcfe') {
        textDetails.innerHTML = "<p>Strike with Precision: The Mamushi X3 Mouse<br>Elevate your gameplay and productivity with the Mamushi X3, a mouse engineered for excellence. Featuring a high-precision sensor for pinpoint accuracy and seamless tracking, it ensures every move is flawless. Its ergonomic design provides unparalleled comfort for hours of fatigue-free use, while customizable RGB lighting lets you add a personal touch with vibrant, programmable effects. Built to endure intense gaming sessions and everyday demands, the Mamushi X3 is the perfect blend of performance, durability, and style.</p>";
        textDetails.style.color = "#9578a4";
        textDetails.style.display = "flex";
        btnLearnMore.style.display = "flex";
        learnMoreLink.href = "mouse.html"
        mou1Img.classList.add("selected"); 
    }
}
/* tech Image Slide */
let techCurrentSlide = 0; 
const techImages = document.querySelectorAll(".imgts");
const techDots = document.querySelectorAll(".dottsk");


function showTechSlide(index) {
    techImages.forEach((image, i) => {
        image.style.display = i === index ? "block" : "none";
    });
    techDots.forEach((dot, i) => {
        dot.className = dot.className.replace(" activets", ""); 
        if (i === index) dot.className += " activets";
    });
}

function changeSlideTS(n) {
    techCurrentSlide = (techCurrentSlide + n + techImages.length) % techImages.length;
    showTechSlide(techCurrentSlide);
}

function setSlideTS(n) {
    techCurrentSlide = n - 1; 
    showTechSlide(techCurrentSlide);
}

function autoSlideTS() {
    techCurrentSlide = (techCurrentSlide + 1) % techImages.length;
    showTechSlide(techCurrentSlide);
}
  

/* select color funstion */

document.addEventListener("DOMContentLoaded", () => {
  const productSections = document.querySelectorAll(".detailsts");

  productSections.forEach(section => {
    const colorOptions = section.querySelectorAll(".color-option");
    const selectedColorDisplay = section.querySelector("#selected-color");
    const addToCartButton = section.querySelector("#cartts");
    const buyNowButton = section.querySelector("#buyts");

    colorOptions.forEach(option => {
        option.addEventListener("click", () => {
            const selectedColor = option.dataset.color;
            const selectedColorCode = option.dataset.colorCode;

            selectedColorDisplay.textContent = selectedColor;
            selectedColorDisplay.style.color = selectedColorCode;

            addToCartButton.disabled = false;
            buyNowButton.disabled = false;

            colorOptions.forEach(img => img.style.border = "none");
            option.style.border = `3px solid #df4b6f`;

            colorOptions.forEach(img => {
              img.style.transform = "scale(1)";
              img.style.transition = "transform 0.3s ease";
            });
            option.style.transform = "scale(1.1)"; 
        });
    });
  });
});

/* add to cart */
function addToCart() {
  const itemName = document.getElementById('titlets').textContent;
  const price = parseFloat(document.getElementById('price').textContent.replace(' USD', ''));
  const selectedColor = document.getElementById('selected-color').textContent;
  

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.push({
    name: itemName,
    price: price,
    color: selectedColor
  });

  localStorage.setItem('cart', JSON.stringify(cart));

  alert(`${itemName} in ${selectedColor} has been added to your cart!`);
}

window.onload = function() {
  SlideShow(Curr_slide);
  setInterval(autoSlide, 5000);
  showTechSlide(techCurrentSlide);
  setInterval(autoSlideTS, 5000);
  showText('kbfe');
};
