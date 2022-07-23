function deskmenu(id, classe){
    const t = document.querySelector(classe);
    if (t.classList.contains('open')){
        t.classList.remove('open');
    }else{
        t.classList.add('open')
    }

    const k = document.getElementById(id);
    if (k.classList.contains('menu-closed')){
        k.classList.remove('menu-closed');
        k.classList.add('menu-open');
    }else{
        k.classList.remove('menu-open');
        k.classList.add('menu-closed');
    }
}

function openMenuMob(id1, id2){
    const z = document.getElementById(id1);
    if (z.classList.contains('menu-closed-mob')){
        z.classList.remove('menu-closed-mob');
        z.classList.add('menu-open-mob');
    }else{
        z.classList.remove('menu-open-mob');
        z.classList.add('menu-closed-mob');
    }

    const b = document.getElementById(id2);
    if (b.classList.contains('mobile-menu-item-closed')){
        b.classList.remove('mobile-menu-item-closed');
        b.classList.add('mobile-menu-item-open')
    }else{
        b.classList.remove('mobile-menu-item-open');
        b.classList.add('mobile-menu-item-closed')
    }
}

function show(){
    const item = document.querySelector('.mobile-menu-closed');
    item.classList.remove('mobile-menu-closed');
    item.classList.add('mobile-menu-show');
    
    const back = document.querySelector('.dark');
    back.classList.remove('dark');
    back.classList.add('dark-show');
}

function fechar(){
    const it = document.querySelector('.mobile-menu-show');
    it.classList.remove('mobile-menu-show');
    it.classList.add('mobile-menu-closed');

    const backg = document.querySelector('.dark-show');
    backg.classList.remove('dark-show');
    backg.classList.add('dark');
}
