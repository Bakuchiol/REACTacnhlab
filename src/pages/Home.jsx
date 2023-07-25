import React from 'react'
import MainLayout from '../layout/MainLayout'
import HomePage from '../components/HomePage'

function Home() {

  return (
    <MainLayout>
        <div id='homeWrap'>
            <HomePage />
        </div>
    </MainLayout>
    
  )
}

export default Home
