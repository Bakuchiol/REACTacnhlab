import React, { useState, useEffect } from 'react'
import MainLayout from '../../layout/MainLayout'
import Bug from '../../components/Bug';
// css
import './bugStyle.css';
// api
import { getBugs } from '../../api/api_calls';
// link
import { Link } from 'react-router-dom';

function BugList(props) {
  // set state
  const [bugs, setBugs] = useState([]);
  // api
  useEffect(()=>{
    getBugs()
    .then(bugData => setBugs(bugData))
  }, [])


  return (
    <MainLayout>
      <div id='bugWrap'>
      {BugList.length ? 
          <div id='bugComp'>
          {bugs.map((bug) => {
            return (
              <Link
              to='/insect-info'
              state={{ bug }}
              key={bug.id}
              >
                <Bug key={bug['file-name']} bug={bug} />
              </Link>
            )
          })}
        </div>
        :
        <>
        <h2>LOADING BUG INFO ...</h2>
        </>
      }
      </div>
    </MainLayout>
    
  )
}

export default BugList
