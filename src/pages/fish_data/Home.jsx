import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import api
import { getFish } from '../../api/api_calls'
// import component
import MainLayout from '../../layout/MainLayout'
import Fish from '../../components/Fish'

function Home() {
    // state
    const [fishes, setFishes] = useState([])

    // fetch data
    useEffect(() => {
        getFish()
        .then(fishData => setFishes(fishData))
    }, [])

  return (
    <MainLayout>
        <div id='fishData'>
            {Fish.length ?
            
        }
            <h1>?? FISH ??</h1>
            <>
                {fishes.map((fish) =>{
                    return (
                        <Fish key={fish.id} fish={fish}/>
                    )
                })}
            </>
        </div>
    </MainLayout>
  )
}

export default Home
