let main = document.querySelector('main')
let btnMenu = document.querySelector('.btnmenu')
let btnMenuClose = document.querySelector('.btnmenu.close')
let containerMenu = document.querySelector('.containerMenu')
let menu = document.querySelector('.menu')


btnMenu.addEventListener('click', () => {
    containerMenu.classList.toggle('open')
    // main.style.filter = 'blur(3px)'
    btnMenu.innerHTML = '<i class="bi bi-x-lg"></i>'
    // btnMenu.style.zIndex = '4'

    let pagAtual = document.querySelector('.here')

    document.addEventListener('mousedown', (event) => {
        if ((containerMenu.classList.contains('open') && ! menu.contains(event.target)) || pagAtual.contains(event.target)){
            containerMenu.style.opacity = '0'
            // main.style.removeProperty('filter')
            btnMenu.innerHTML = '<i class="bi bi-list"></i>'
            // btnMenu.style.removeProperty('z-index')

            setTimeout(() => {
                containerMenu.style.removeProperty('opacity')
                containerMenu.classList.remove('open')
            },500)
                }
    })

})

/*let all_h3 = document.querySelectorAll('.section-title, .clientes h3')
all_h3.forEach(element => {
    console.log(element)
    let hr = document.createElement('hr')
    element.insertAdjacentElement('afterend', hr)
});*/


let btnCarProjEsq = document.querySelectorAll('.carousel-control-prev-icon')
btnCarProjEsq.forEach(element => element.innerHTML = '<i class="bi bi-chevron-left"></i>')

let btnCarProjDir = document.querySelectorAll('.carousel-control-next-icon')
btnCarProjDir.forEach(element => element.innerHTML = '<i class="bi bi-chevron-right"></i>')