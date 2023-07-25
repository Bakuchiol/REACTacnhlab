import React, { useState, useEffect } from 'react'
import { getSeaCreature } from '../../api/api_calls'
import MainLayout from '../../layout/MainLayout'
import SeaCreature from '../../components/SeaCreature'
import { Link } from 'react-router-dom'
// css
import './seaStyle.css';

function SeaList(props) {
  // state
  const [seaCreatures, setSeaCreatures] = useState([]);
  // api
  useEffect(() => {
    getSeaCreature()
    .then(seaData => setSeaCreatures(seaData))
    // console.log('seaCreature::',seaCreatures)
  }, [])


  return (
    <MainLayout>
      <div id='seaWrapper'>
        {SeaList.length ?
        <div id='seaCard'>
          {seaCreatures.map((sea) => {
            return (
              <Link
              to='/sea-creatures-info'
              state={{ sea }}
              key={sea.id}
              >
                <SeaCreature key={sea['file-name']} sea={sea}/>
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

export default SeaList
