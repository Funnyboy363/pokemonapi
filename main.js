import { pokemon } from './pokemon.js'

console.log(pokemon)

const pokeContainer = document.querySelector('#container')
let count = 0



// pokemon.forEach(poke => {
//     count++
//     console.log(`${poke.id}${poke.ename}`)
//     let fig = document.createElement('figure')
//     let img = document.createElement('img')
//     let cap = document.createElement('figcaption')
//     cap.textContent = poke.ename
//     img.src = `images/${poke.id}${poke.ename}.png`
//     pokeContainer.appendChild(fig)
//     fig.appendChild(cap)
//     fig.appendChild(img)
    
// })





let sceneDiv = document.querySelector('.scene')

const cardCreator = (pokemon) => {
    let cardDiv = document.createElement('div')
    cardDiv.addEventListener('click', function() {
        cardDiv.classList.toggle('is-flipped');
    })
    let frontCard = document.createElement('div')
    let backCard = document.createElement('div')

    let name = document.createElement('p')
    let height = document.createElement('p')
    let mass = document.createElement('p')
    name.textContent = `Name: ${pokemon.name}`
    height.textContent = `Height: ${pokemon.height}`
    mass.textContent = `Mass: ${pokemon.mass}`
    backCard.appendChild(name)
    backCard.appendChild(height)
    backCard.appendChild(mass)
    cardDiv.className = "card"
    let fig = document.createElement('figure')
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    cap.textContent = poke.ename
    img.src = `images/${poke.id}${poke.ename}.png`
    pokeContainer.appendChild(fig)
    fig.appendChild(cap)
    fig.appendChild(img)
    // frontCard.className = "card__face card__face--front"
    // backCard.className = "card__face card__face--back"
    // let frontImg = document.createElement('img')
    // frontImg.src = `images/${poke.id}.png`
    // frontCard.appendChild(frontImg)

    

  

    // now, add the front and back cards to the containing div
    cardDiv.appendChild(frontCard)
    cardDiv.appendChild(backCard)
    sceneDiv.appendChild(cardDiv)
    console.log(pokemon.name)
};

people.forEach(element => cardCreator(element))

let newCard = {
    "name": "Grant Shoop",
    "height": "71",
    "mass": "70",
    "birth_year": "1987",
    "gender": "sir",
}

let createCard = document.querySelector('#createCard')
createCard.addEventListener('click', () => {
    return cardCreator(newCard)
})