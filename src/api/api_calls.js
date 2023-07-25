// base url
// import axios from "axios"

const baseUrl = 'https://acnhapi.com/v1a'


// const getFish = async() => {
//     const response = await axios.get(`${baseUrl}/fish`)
//     let info = await response.data
//     console.log(info)
// }

// const getFishInfo = async(fishID) => {
//     const response = await axios.get(`${baseUrl}/fish/${fishID}`)
//     let info = await response.data
//     console.log(info)
// }


// fish data
function getFish(){
    return fetch(`${baseUrl}/fish`)
    .then(response => response.json())
}

// fish info
function getFishInfo(fishID){
    return fetch(`${baseUrl}/fish/${fishID}`)
    .then(response => response.json())
}

// bug data
function getBugs(){
    return fetch(`${baseUrl}/bugs`)
    .then(response => response.json())
}

// bugs info
function getBugInfo(bugID){
    return fetch(`${baseUrl}/bugs/${bugID}`)
    .then(response => response.json())
}

// sea creature data
function getSeaCreature(){
    return fetch(`${baseUrl}/sea`)
    .then(response => response.json())
}

// sea creature info
function getSeaCreatureInfo(seaID){
    return fetch(`${baseUrl}/sea/${seaID}`)
    .then(response => response.json())
}




// --------------------------------------------------------
// furniture
function shopSearch(searchData){
    return fetch(`${baseUrl}/fish/${searchData.query}`)
    .then(response => {response.json()
        console.log(`${baseUrl}/fish/${searchData}`)
    })
}


export{
    getFish,
    getFishInfo,
    getBugs,
    getBugInfo,
    getSeaCreature,
    getSeaCreatureInfo,
    shopSearch
}

// DnD
// export async function shopSearch(searchData){
//     const res = await fetch(`https://www.dnd5eapi.co/api/spells/?name=${searchData.query}`)
//     return res.json()
// }