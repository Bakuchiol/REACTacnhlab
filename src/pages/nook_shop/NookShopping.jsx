import React, { useState } from 'react'
import MainLayout from '../../layout/MainLayout'
import NookShop from '../../components/NookShop'
// search
import { shopSearch } from '../../api/api_calls'


function NookShopping() {
    // new concept : lifting state
    // set state
    const [items, setItems] = useState([])
    // form - handles searching for items
    const handleShopSearch = async searchData => {
      const shopResults = await shopSearch(searchData) // or formData?
      console.log(shopResults)
      setItems(shopResults)
    }

  return (
    <MainLayout>
      <div id='nookWrap'>
        <h1>Nook Shopping</h1>
        {/* search form - component that has state */}
        <NookShop handleShopSearch={handleShopSearch}/>
        {items.length ?
          <>
            {items.map(item =>
              <div key={item.id}>
                {item?.name}
              </div>
              )}
          </>
          :
          <h3>Please search again ...</h3>
          }
      </div>
    </MainLayout>
    
  )
}

export default NookShopping
