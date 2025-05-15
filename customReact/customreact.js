function customRender(reactElement, mainContainer){
//     const domElement = document.createElement
//     (reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href' , reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     mainContainer.appendChild(domElement)
// }

// const reactElement = {
//     type : 'a',
//     props : {
//         href: 'https://google.com',
//         target : '_blank'
//     },
//     children : 'Click me to visit google'

document.createElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for (const prop in props) {
    if (prop == children) continue; 
    domElement
    }
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)