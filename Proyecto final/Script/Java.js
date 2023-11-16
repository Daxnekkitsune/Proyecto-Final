import {Data} from './Data.js'

console.log(Data)

const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
let like = [];

document.addEventListener('DOMContentLoaded', () => {
    loadData(Data);
})

const loadData = Data => {
    Data.forEach(element => {
        const { id, imagen } = element;
        templateCard.querySelector('img').setAttribute('src', imagen);
        templateCard.querySelector('.btn').dataset.id = id;
        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment);
}

items.addEventListener('click', e => {
addLike(e);
})

const addLike = e => {
    if (e.target.classList.contains('btn'));
    setLike(e.target.parentElement);
}

const setLike = objeto => {
    const boton = {
        id: objeto.querySelector('btn').dataset.id,
        cantidad : 0
    }
    if (like.hasOwnProperty(boton.id)) {
        boton.cantidad = like[boton.id].cantidad + 1;
        objeto.querySelector('#like').textContent = boton.cantidad;
    }

    like[boton.id] = {...boton};
    console.log(like[boton.id]);
}