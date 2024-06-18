var menuBtn = document.querySelector('.items-menu-mobile i');
menuBtn.addEventListener('click', () => {
    let itemsMenu = document.querySelector('.menu-mobile');
    if(itemsMenu.classList.contains('show')){
        itemsMenu.classList.add('hide');
        itemsMenu.classList.remove('show')
    }else{
        itemsMenu.classList.add('show');
        itemsMenu.classList.remove('hide')
    }
})