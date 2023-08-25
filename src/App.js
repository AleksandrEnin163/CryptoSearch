import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CoinsList from './components/CoinsList/CoinsList'
import NavBar from './components/NavBar/NavBar'
import {Routes, Route} from 'react-router-dom'
import CoinItemInfoPage from './components/pages/CoinItemInfoPage'

function App() {

  const [coins, setCoins] = useState([])
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <NavBar />
      <Routes >
        <Route path="/" element={<CoinsList coins={coins} />} />
        <Route path='coins/:id' element={<CoinItemInfoPage />} />
      </Routes>
    </>
  )
}

export default App