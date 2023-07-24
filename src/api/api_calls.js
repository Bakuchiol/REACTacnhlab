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

// bugs info
function getFishInfo(fishID){
    return fetch(`${baseUrl}/fish/${fishID}`)
    .then(response => response.json())
}

export{
    getFish,
    getFishInfo
}