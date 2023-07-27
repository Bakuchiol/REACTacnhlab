import React from 'react'
// bugInfo


function HomePage(props) {

    const images = 
    {
      logo: 'https://assets.stickpng.com/images/5b4a216ec051e602a568cd7e.png',
      present: 'https://image.spreadshirtmedia.com/image-server/v1/designs/1030279079,width=178,height=178.png',
      blathers: 'https://cdn.custom-cursor.com/packs/2917/animal-crossing-blathers-and-book-pack.png'
    }

  return (
    <div id='homeComp'>
      <img src={images.logo} alt="logo" className='homeLogo'/>
      <img src={images.present} alt="present" className='homePresent'/>
      {/* <div className='blathersWrap'>
        <div id='blathersBox'>
            <div className='blathersSearch'>
                <p>SEARH AREA HERE</p>
            </div>
            <img src={images.blathers} alt="" />
        </div>
      </div> */}
      
    </div>
  )
}

export default HomePage
