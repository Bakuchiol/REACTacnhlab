import React, { useState, useEffect } from 'react'
import MainLayout from '../../layout/MainLayout'
import './bugStyle.css';
// api
import axios from "axios"

function Butterflies() {
    const [bugs, setBugs] = useState(null)
    // const [loading, setLoading] = useState(true)

    const fetchBugs = async() => {
        const responseBugs = await axios.get('https://acnhapi.com/v1a/bugs')
        let info = await responseBugs.data
        console.log(info)
        setBugs(info)
    }

    useEffect(() => {
        fetchBugs();
    }, [])

const loaded = () => {
    return (
        <MainLayout>
            <div className='test'>
            {bugs.map((bug, index) => 
            <div key={index}>
              <img src={bug.image_uri} alt="" />
            </div>)}
          </div>
        </MainLayout>
      )
}
  const loading = () => {
    <h1> LOADING ...</h1>
}

return bugs ? loaded() : loading

}


export default Butterflies
