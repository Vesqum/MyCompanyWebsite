(function MnuBars() {
    const menuBars = document.getElementById('menu-bars');
    const overlay = document.getElementById('overlay');
    const nav1 = document.getElementById('nav1');
    const nav2 = document.getElementById('nav2');
    const nav3 = document.getElementById('nav3');
    const nav4 = document.getElementById('nav4');
    const nav5 = document.getElementById('nav5');
    const navItems = [nav1, nav2, nav3, nav4, nav5];

    function navAnimation(direction1, direction2) {
        navItems.forEach((item, i) => {
            item.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`)
        })
    }


    function toogleNav() {
        menuBars.classList.toggle('change')
        if(overlay.classList.contains('overlay-off')){
            overlay.classList.replace('overlay-off', 'overlay-active')
            navAnimation('out', 'in')
        } else {
            overlay.classList.replace('overlay-active', 'overlay-off')
            navAnimation('in', 'out')
        }
    }

    navItems.forEach(item => {
        item.addEventListener('click', toogleNav)
    })
    menuBars.addEventListener('click', toogleNav)

    const footerYear = document.querySelector('.footer__year')
    function currentYear() {
        const currentYearDate = (new Date).getFullYear();
        footerYear.innerText = currentYearDate;
    }
    currentYear()
})()








