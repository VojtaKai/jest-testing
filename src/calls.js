const axios = require('axios')

async function getStarwarsCharacters(id = undefined) {
    if (id) {
        // https://pokeapi.co/api/v2/pokemon/charmeleon
        return await axios.get(`https://swapi.dev/api/people/${id}`)
    } else {
        return await axios.get('https://swapi.dev/api/people')
    }

}

async function easyPromise() {
    const result = await new Promise((res, rej) => {
        setTimeout(() => {
            res('easy result')
        }, 2000)

    })
    return result
}

function method1() {
    return 150
}

const propA = 'unmocked property'

module.exports = {
    getStarwarsCharacters,
    easyPromise,
    method1,
    propA
}