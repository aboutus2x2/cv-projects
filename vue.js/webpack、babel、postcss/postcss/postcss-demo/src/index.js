import './main.css'

function component() {
    let el = document.createElement('div')
    el.innerHTML = `<span class="my-class">hello postcss</span>`
    return el
}

document.body.appendChild(component())
