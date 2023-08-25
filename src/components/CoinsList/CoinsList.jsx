import React, { useState } from 'react'
import CoinItem from '../CoinItem/CoinItem'
import s from './CoinsList.module.css'

function CoinsList({coins}) {

  const [filter, setFilter] = useState('')
  const handleChange = (e) => {
    setFilter(e.target.value)
  }
  const filtered_coins = coins.filter(coin => coin.name.toLowerCase().includes(filter.toLowerCase()) || coin.symbol.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className={s.container}>
      <div className={s.filter}>
        <input type="text" placeholder='Search' className={s.coin_input} onChange={handleChange} />
      </div>
        <div>
          <div className={s.heading}>
            <p>#</p>
            <p className={s.coin_name}>Coin</p>
            <p className={s.price}>Price</p>
            <p>24h</p>
            <p className={s.hide_mobile}>Volume</p>
            <p className={s.hide_mobile}>Mkt cap</p>
          </div>
          {filtered_coins.map( coins => {
            return (
              <CoinItem coins={coins} key={coins.id} />
            )
          })}
        </div>
    </div>
  )
}

export default CoinsList