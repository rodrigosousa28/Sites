function show(){
    let mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open');
    }
    else{
        mobileMenu.classList.add('open');
    }
}

let target = document.querySelectorAll('[data-animation]');
let animationClass = 'animate';

function animeScroll(){
    let windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);
        }else{
            element.classList.remove(animationClass);
        }
    })
}

if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
}


