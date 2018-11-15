import { pokemon } from './pokemon.js'

console.log(pokemon)

const pokeContainer = document.querySelector('#container')
let count = 0

pokemon.forEach(poke => {
    count++
    let numPrefix = count > 9 ? '0' : '00'
    console.log(`${poke.id}${poke.ename}`)
    let fig = document.createElement('figure')
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    cap.textContent = poke.ename
    img.src = `images/${poke.id}${poke.ename}.png`
    pokeContainer.appendChild(fig)
    fig.appendChild(cap)
    fig.appendChild(img)
    
})





