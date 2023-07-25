import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { getSeaCreatureInfo } from '../../api/api_calls'
import MainLayout from '../../layout/MainLayout'


function SeaInfo({props}) {
  // state
  const [seaInfo, setSeaInfo] = useState({});
  // location
  let location = useLocation()

  useEffect(() => {
    getSeaCreatureInfo(location.state.sea.id)
    .then(seaData => setSeaInfo(seaData))
  })

  return (
    <MainLayout>
      <div id='seaInfoWrap'>
        <div className='seaInfoBox'>
          <img src={seaInfo?.['image_uri']} alt="sea-creature" className='seaIMG' />
          <h3 className='seaName'>{seaInfo?.['file-name']}</h3>
          <div className='seaData'>
            <p className='seaQuote'>"{seaInfo?.['museum-phrase']}"</p>
            <br />
            <p className='seaBlath'> - Blathers, Museum Director</p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default SeaInfo
