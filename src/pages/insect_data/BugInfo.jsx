import React, { useState, useEffect } from 'react'
import MainLayout from '../../layout/MainLayout'
// api
import { getBugInfo } from '../../api/api_calls'
// useLocation
import { useLocation } from 'react-router-dom'

function BugInfo(props) {
  // state
  const [bugInfo, setBugInfo] = useState({})
  // location
  let location = useLocation()

  useEffect(() => {
    getBugInfo(location.state.bug.id)
    .then(bugData => setBugInfo(bugData))
  })

  return (
    <MainLayout>
      <div id='bugInfo'>
        {/* <p>BUG INFO HERE</p> */}
        <div className='bugInfo'>
          <img src={bugInfo?.['image_uri']} alt="bugImg" className='bugIMG'/>
            {/* name not showing!! file path xxx */}
            <div id='bugWrapper'>
            <div className='bugData'>
                  <p className='bugPhrase'>
                    "{bugInfo?.['museum-phrase']}"
                  </p>
                  <br />
                    <p id='Blathers'>- Blathers, Museum Director</p>
              </div>
            </div>
              
          </div>
      </div>
    </MainLayout>
  )
}

export default BugInfo
