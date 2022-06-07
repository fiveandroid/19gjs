/*
    DOM
*/

// Seleccionar por ID

document.getElementById('title')
document.getElementsByTagName('h1')[0]
document.getElementsByClassName('item')



document.getElementsByTagName('ul')[0].setAttribute('class', 'lista')

document.querySelector('.item').removeAttribute('class', 'item')

let lista = document.querySelectorAll('li')

lista.forEach(( item )=>{
    item.setAttribute('class', 'item__lista')
})