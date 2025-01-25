// import React from 'react';

function customRender(reactElement, container) {

    const domElement = document.createElement(reactElement.type);
    domElement.textContent = reactElement.children;

    for (const prop in reactElement.props){
        if(prop === 'children') continue;

        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    //chai with code react vid:4/34
    

    container.appendChild(domElement)
}

const reactElement={
    type: 'a',
    props:{
        href: 'https://www.google.com',
        target: '_blank',
    },
    children: 'Click me'
}
// const reactElement= React.createElement(
//     'a',
//     {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     'Click me'
// )



const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);
