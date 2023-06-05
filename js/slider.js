
const sliderImages = document.querySelectorAll('.slider_img');
const sliderLine = document.querySelector('.main_slider-line');
const sliderDots = document.querySelectorAll('.slider_dot');
const sliderLinks = document.querySelectorAll('.main_slider-navi_link')
const sliderData = document.querySelectorAll('.main_content-conditions_data')
const sliderBtnNext = document.querySelector('.slider_btn-next');
const sliderBtnPrev = document.querySelector('.slider_btn-prev');

let sliderCount = 0;
let sliderWidth;

sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

function showSlide(){
    sliderWidth = document.querySelector('.main_slider-inner').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length +'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
    rollSlider();
}
showSlide();

function nextSlide(){
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;
    rollSlider();
    thisSlide(sliderCount);
}

function prevSlide(){
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length - 1;
    rollSlider();
    thisSlide(sliderCount);
}

function rollSlider(){
    sliderLine.style.transform = `translateX(${- sliderCount*sliderWidth}px)`;
}

function thisSlide(index){
    sliderDots.forEach(item => item.classList.remove('active_dot'));
    sliderDots[index].classList.add('active_dot');
    sliderLinks.forEach(item => item.classList.remove('active_link'));
    sliderLinks[index].classList.add('active_link');
    sliderData.forEach(item => item.classList.remove('active_data'));
    sliderData[index].classList.add('active_data');
}

sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})

sliderLinks.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})
