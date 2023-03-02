'use strict';


//<div class="cell">1</div>

//Functions

function createElement (htmlElement, className, htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;

    return element;
}

function appendElement(containerElement, htmlElement){
    containerElement.append(htmlElement);
}

//Main

let cellNumber = 100;
const containerBoard = document.querySelector('.board');

for(let i = 1; i <= cellNumber; i++){
    const createdElement = createElement('div', 'cell-100', i);
    appendElement(containerBoard, createdElement);
}

const button = document.querySelector('.play-btn');
button.addEventListener('click', function() {
    const play = document.querySelector('.cell-100');
    play.classList.add('.show');
})

