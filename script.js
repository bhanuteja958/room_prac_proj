//Required elements for DOM Changes based on user events
const leftControl = document.querySelector(".carousel-left-control");
const rightControl = document.querySelector(".carousel-right-control");
const heroTopLeft = document.querySelector(".hero-top-left");
const carouselItemTitle = document.querySelector(".carousel-item-title");
const carouselItemContent = document.querySelector(".carousel-item-content");
const hamburgerBtn = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");
const mobileNav = document.querySelector(".mobile-nav")

// Variable to select the info needed to be displayed in carousel 
let carouselCount = 0;

//Carousel Information
const carouselImages = ['./images/desktop-image-hero-1.jpg','./images/desktop-image-hero-2.jpg','./images/desktop-image-hero-3.jpg']
const carouselInfos = [ 
    {
        title:"Discover innovative ways to decorate",
        content:" We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
    },
    {
        title:"We are available all across the globe",
        content:" With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        title: "Manufactured with the best materials",
        content:" Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]


//Functionality for close icon in mobile view
closeBtn.addEventListener("click",()=>{
    mobileNav.style.transform = "translateY(-100px)"
})

//Functionality for hanburger icon in mobile view
hamburgerBtn.addEventListener("click",()=>{
    mobileNav.style.transform = " translateY(0)"
})


//Function to change the carousel info
function changeCarouselItem (){
    carouselItemTitle.style.opacity = 0;
    carouselItemContent.style.opacity = 0;
    heroTopLeft.style.backgroundImage = `url("${carouselImages[carouselCount]}")`
  

    setTimeout(()=>{
        carouselItemTitle.textContent = carouselInfos[carouselCount].title
        carouselItemContent.textContent = carouselInfos[carouselCount].content
        carouselItemTitle.style.opacity = 1;
        carouselItemContent.style.opacity = 1;
    },250)
}


//Functionality for getting previous carousel item info
leftControl.addEventListener("click",()=> {
    if(carouselCount === 0){
        return;
    }
    carouselCount--;
    changeCarouselItem();
});


//Functionality for getting netxt carousel item info
rightControl.addEventListener("click",()=> {
    if(carouselCount === 2){
        return;
    }
    carouselCount++;
    changeCarouselItem();
});