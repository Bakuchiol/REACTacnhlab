import React, { useState, useEffect } from 'react'
import MainLayout from '../../layout/MainLayout'
// api
import { getFishInfo } from '../../api/api_calls'
// use location
import { useLocation } from 'react-router-dom'

function FishInfo() {
    // state
    const [fishInfo, setFishInfo] = useState({});
    // location
    let location = useLocation()
    // console.log("right location??", location)

    // useEffect
    useEffect(()=>{
        getFishInfo(location.state.fish.id)
        .then(fishData => setFishInfo(fishData))
    })
    


  return (
    <MainLayout>
        <div id='fishInfoWrap'>
            <div className='fishInfo'>
                <img src={fishInfo?.['image_uri']} alt="fishImg" />
                <div id='quoteBox'>
                    <p className='quote'>
                        "{fishInfo?.['museum-phrase']}"
                    </p>
                </div>
                    <br />
                    <p id='blathers'> - Blathers, Museum Director</p>
            </div>
        </div>
    </MainLayout>
  )
}

export default FishInfo
