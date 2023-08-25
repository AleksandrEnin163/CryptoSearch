import React from 'react'
import s from './CoinItem.module.css'
import { Link } from 'react-router-dom'

function CoinItem({coins}) {
  return (
    <Link to={`/coins/${coins.id}`}>
      <div className={s.coin_row}>
          <p>{coins.market_cap_rank}</p>
          <div className={s.img_symbol}>
              <img src={coins.image} alt='coin_image' />
              <p>{coins.symbol?.toUpperCase()}</p>
          </div>
          <p className={s.price}>${coins.current_price?.toLocaleString()}</p>
          <p className={s.price_change} style={{color: coins.price_change_percentage_24h?.toFixed(2) >= 0 ? 'lightgreen' : 'red' }}>{coins.price_change_percentage_24h?.toFixed(2)}%</p>
          <p className={s.hide_mobile}>${coins.total_volume?.toLocaleString()}</p>
          <p className={s.hide_mobile}>${coins.market_cap?.toLocaleString()}</p>
      </div>
    </Link>
  )
}

export default CoinItem