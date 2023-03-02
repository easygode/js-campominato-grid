'use strict';


//<div class="cell">1</div>

//Functions

function createElelemt (htmlElement, className, htmlValue){
    const element = document.createElement(htmlElement);
    element.classList.add(className);
    element.innerText = htmlValue;

    return element;
}

function appendElement(containerElement, htmlElement){
    containerElement.append(htmlElement);
}

//Main

let cellNumber = 81;
const containerBoard = document.querySelector('.board');

for(let i = 1; i <= cellNumber; i++){
    const createdElelemt = createElelemt('div', 'cell-81', i);
    appendElement(containerBoard, createdElelemt);
}
