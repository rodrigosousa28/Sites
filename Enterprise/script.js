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
