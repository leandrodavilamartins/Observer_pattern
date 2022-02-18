import Observable  from "./observer.js";

const obj = new Observable();

const paragraph = document.querySelector('#p1');
const input = document.querySelector('#input01');


function updateP1(text) { // an observer 
    paragraph.textContent = text;
}


obj.subscribe(updateP1);


input.addEventListener('keyup', event =>{
    obj.notify(event.currentTarget.value);
})

// um observer é uma função que "escuta" alterações e as transmite à elementos do DOM 