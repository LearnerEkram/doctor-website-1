
//var navBtn = document.querySelector('#nav-bar')


var menu =document.querySelector('.nav');
var navBtn = document.querySelector('#nav-bar');

navBtn.onclick = () => {
    navBtn.classList.toggle('fa-times'); 
    menu.classList.toggle('active');
   

}

// owl carousel section
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
