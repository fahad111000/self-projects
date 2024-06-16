
// ______________________________________________________________________________________

let left = document.querySelector('.left');
let right = document.querySelector('.right');
let slider = document.querySelector('.slider');
let images = document.querySelectorAll('.image');

let imagesLength = images.length;
let sliderNumber = 1;

right.addEventListener('click', () => {
    sliderNumber < imagesLength ? nextSlide() : getFirstSlide()
})

left.addEventListener('click', () => {
    sliderNumber > 1 ? prevSlide() : getLastSlide()
})
// ______________________ Right Indicator _________________________________

let nextSlide = () => {
    slider.style.transform = `translateX(-${sliderNumber * 640}px)`;
    sliderNumber++;

}
const getFirstSlide = () => {
    slider.style.transform = `translateX(0)`;
    sliderNumber = 1
}


// _______________________ Left Indicator _________________________________
const prevSlide = () => {
    slider.style.transform = `translateX(-${(sliderNumber - 2) * 640}px)`;
    sliderNumber--;

}

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(sliderNumber * 2) * 640}px)`;
    sliderNumber = imagesLength
}

