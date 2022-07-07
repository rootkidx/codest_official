
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  //toggle nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');




    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      }
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
      }

    });
    //burger Animation
    burger.classList.toggle('toggle');
  });




}
navSlide();


if (localStorage.getItem('active') === null) {
  localStorage.setItem('active', "active");
}

function changeStatus() {
  let themeToggler = document.querySelector(".theme-toggler");
  let getPage = localStorage.getItem('active');
  themeToggler.classList.toggle(localStorage.getItem('active'));

  if (localStorage.getItem('active') === "active") {
    document.body.classList.add('active');
  } else {
    document.body.classList.remove('active');
  }

  themeToggler.onclick = () => {
    themeToggler.classList.toggle('active');
    if(themeToggler.classList.contains('active') ){
      
      document.body.classList.add('active');
      
    }else{
      document.body.classList.remove('active');
     
    }
    
    if (localStorage.getItem('active') === "non-active") {
      
      localStorage.setItem('active', "active");
      
    } else {
    
      localStorage.setItem('active', "non-active");
   
    }

    console.log(getPage);
  }
}

changeStatus();
