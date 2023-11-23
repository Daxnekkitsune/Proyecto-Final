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
