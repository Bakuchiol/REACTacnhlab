import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// style
import './fishStyle.css';
// import api
import { getFish } from '../../api/api_calls'
// import component
import MainLayout from '../../layout/MainLayout'
import Fish from '../../components/Fish'

function FishList(props) {
    // state
    const [fishes, setFishes] = useState([])

    // fetch data
    useEffect(() => {
        getFish()
        .then(fishData => setFishes(fishData))
    }, [])

  return (
    <MainLayout>
        <div id='fishWrap'>
            {/* <h1>?? FISH ??</h1> */}
            {Fish.length ?
                <div id='fishData'>
                    {fishes.map((fish) =>{
                        return (
                            <Link
                            to='/fish-info'
                            key={fish.id}
                            state={{ fish }}
                            >
                            <Fish key={fish['file-name']} fish={fish} />
                            </Link>
                        )
                    })}
                </div>
                :
                <>
                <h2> LOADING ...</h2>
                </>
            } 
        </div>
    </MainLayout>
  )
}

export default FishList
