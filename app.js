
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const hideNav =document.querySelector("body");
   
//toggle nav
    burger.addEventListener,hideNav.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

    
  
      
//Animate Links
    navLinks.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.4}s`;
        }
        
        // console.log(index / 7);
    });
//burger Animation
     burger.classList.toggle('toggle');
});




}
navSlide();

// var counterContainer = document.querySelector(".footer-bottom  .visitors .website-counter");
// // var resetButton = document.querySelector("#reset");
// var visitCount = localStorage.getItem("page_view");

// // Check if page_view entry is present
// if (visitCount) {
//   visitCount = Number(visitCount) + 1;
//   localStorage.setItem("page_view", visitCount);
// } else {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
// }
// counterContainer.innerHTML = visitCount;



