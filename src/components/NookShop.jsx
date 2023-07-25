import React, { useState } from 'react'

function NookShop(props) {
    // state is now searchData - controlled input
    const [searchData, setSearchData] = useState({query: ''}) // ({})
    // function
    const handleChange = (e) => {
        console.log('input test')
        // console.log('key::', e)
        // respond to user input - get data
        // get copy ...
        setSearchData({ ...searchData, [e.target.name]: e.target.value })
    }

    // handles what happens when form is submitted
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleShopSearch(searchData)
        // console.log(searchData)
    }

  return (
    <div>
      <h1>*THIS WILL BE THE FORM*</h1>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        // fields must have name property to match what want to store in state for that field
        name='query'
        autoComplete='off'
        value={searchData.query}
        placeholder='Search an item'
        onChange={handleChange}
        />
      </form>
      <button type='submit'>Search</button>
    </div>
  )
}

export default NookShop
