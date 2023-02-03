// stick nav bar start
window.addEventListener("scroll",function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY > 0 )
})

// stick nav bar end

// mobile-nav bar
const humburger = document.querySelector(".humburger");
const navMenu = document.querySelector(".nav-menu");
humburger.addEventListener("click",() => {
    humburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n
    .addEventListener("click" ,() => {
        humburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))
    window.addEventListener('scroll', function() {
        var elementTarget = document.querySelector('.humburger');
        if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetbottom)) {
            
        } else {
            document.querySelector('.humburger').classList.remove('active');
        }
      });
      window.addEventListener('scroll', function() {
        var elementTarget = document.querySelector('.nav-menu');
        if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetbottom)) {
            
        } else {
            document.querySelector('.nav-menu').classList.remove('active');
        }
      });
     

    

