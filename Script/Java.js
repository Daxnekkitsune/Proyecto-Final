import {} from './Data.js'

console.log()

const container = document.getElementById('container')
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.getElementById();
let like = {};

document.addEventListener('DOMContentLoaded', () =>{
    loadData(data);
})


const loadData = data => {
    data.forEach(personaje =>{
        const { id, nombre, imagen} = personaje;
        templateCard.querySelector('h5').textcontent = nombre;
        templateCard.querySelector('img').setAttribute('src',imagen);  
    })
}

   