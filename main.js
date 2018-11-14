import { pokemon } from './pokemon.js'

console.log(pokemon)

const pokeContainer = document.querySelector('#container')

pokemon.forEach(poke => {
    console.log(poke.ename)
    let fig = document.createElement('figure')
    let cap = document.createElement('figcaption')
    cap.textContent = poke.ename
    fig.appendChild(cap)
    pokeContainer.appendChild(fig)
})