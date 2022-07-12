function show(){
    let mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open');
    }
    else{
        mobileMenu.classList.add('open');
    }
}