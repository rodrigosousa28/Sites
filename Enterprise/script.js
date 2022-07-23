function deskmenu1(){
    const t = document.querySelector('.dropdown-menu-1');
    if (t.classList.contains('open')){
        t.classList.remove('open');
    }else{
        t.classList.add('open')
    }

    const k = document.getElementById('mc1');
    if (k.classList.contains('menu-closed')){
        k.classList.remove('menu-closed');
        k.classList.add('menu-open');
    }else{
        k.classList.remove('menu-open');
        k.classList.add('menu-closed');
    }
    
}

function deskmenu2(){
    const l = document.querySelector('.dropdown-menu-2');
    if (l.classList.contains('open')){
        l.classList.remove('open');
    }else{
        l.classList.add('open')
    }

    const r = document.getElementById('mc2');
    if (r.classList.contains('menu-closed')){
        r.classList.remove('menu-closed');
        r.classList.add('menu-open');
    }else{
        r.classList.remove('menu-open');
        r.classList.add('menu-closed');
    }
}

function openMenuMob1(){
    const z = document.getElementById('mc11');
    if (z.classList.contains('menu-closed-mob')){
        z.classList.remove('menu-closed-mob');
        z.classList.add('menu-open-mob');
    }else{
        z.classList.remove('menu-open-mob');
        z.classList.add('menu-closed-mob');
    }

    const b = document.getElementById('menumob1');
    if (b.classList.contains('mobile-menu-item-closed')){
        b.classList.remove('mobile-menu-item-closed');
        b.classList.add('mobile-menu-item-open')
    }else{
        b.classList.remove('mobile-menu-item-open');
        b.classList.add('mobile-menu-item-closed')
    }
}

function openMenuMob2(){
    const y = document.getElementById('mc12');
    if (y.classList.contains('menu-closed-mob')){
        y.classList.remove('menu-closed-mob');
        y.classList.add('menu-open-mob');
    }else{
        y.classList.remove('menu-open-mob');
        y.classList.add('menu-closed-mob');
    }

    const a = document.getElementById('menumob2');
    if (a.classList.contains('mobile-menu-item-closed')){
        a.classList.remove('mobile-menu-item-closed');
        a.classList.add('mobile-menu-item-open')
    }else{
        a.classList.remove('mobile-menu-item-open');
        a.classList.add('mobile-menu-item-closed')
    }
}

function show(){
    const item = document.querySelector('.mobile-menu-closed');
    item.classList.remove('mobile-menu-closed');
    item.classList.add('mobile-menu-show');
}

function close(){
    const it = document.querySelector('.mobile-menu-show');
    it.classList.remove('mobile-menu-show');
    it.classList.add('mobile-menu-closed');
}
