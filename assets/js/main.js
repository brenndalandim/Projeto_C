//Menu Flutuante
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


// Botões Slide Projetos
let btnCarProjEsq = document.querySelectorAll('.carousel-control-prev-icon')
btnCarProjEsq.forEach(element => element.innerHTML = '<i class="bi bi-chevron-left"></i>')

let btnCarProjDir = document.querySelectorAll('.carousel-control-next-icon')
btnCarProjDir.forEach(element => element.innerHTML = '<i class="bi bi-chevron-right"></i>')


//Código Pre footer padrão
let preFooter = document.querySelector('.pre-footer')

preFooter.innerHTML = `
<div class="contato">
    <h3>Contato</h3>
    <a href="https://wa.me/5521997882626?text=Olá%20vim%20através%20do%20site"><i class="bi bi-whatsapp"></i> (21) 99788-2626</a>
    <a href="tel:+552131160638"><i class="bi bi-telephone"></i> (21) 3116-0638</a>
    <a href="fale-conosco.html"><i class="bi bi-envelope"></i> Fale Conosco</a>
</div>
<img src="assets/img/Logo Construtop com nome branco.png" alt="">
<div class="local">
    <h3>Localização </h3>
    <p><i class="bi bi-geo-alt"></i> Estrada de Jacarepaguá, 7655/1014 – RJ</p>
    <a href="https://www.google.com/maps/place/Construtop+Engenharia+e+Consultoria+Ltda/@-22.942394,-43.341914,13z/data=!4m6!3m5!1s0x9bd833ceca9b83:0x15d08ea48158ad98!8m2!3d-22.9423943!4d-43.3419141!16s%2Fg%2F11clvw0mcn?hl=pt-BR&entry=ttu"><i class="bi bi-map"></i> Ver mapa</a>
</div>
`