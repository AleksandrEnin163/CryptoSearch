import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'

import s from './CoinItemInfoPage.module.css'

const CoinItemInfoPage = () => {

    const id = useParams()
    const [coin, setCoin] = useState({})

    const url = `https://api.coingecko.com/api/v3/coins/${id.id}`


    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <div className={s.coin_container}>
                <div className={s.content}>
                    <h1>{coin.name}</h1>
                </div>
                <div className={s.content}>
                    <div className={s.rank}>
                        <span className={s.rank_btn}>Rank # {coin.market_cap_rank}</span>
                    </div>
                    <div className={s.info}>
                        <div className={s.coin_heading}>
                            <img src={coin.image?.small} alt='' />
                            <p>{coin.name}</p>
                            <p>{coin.symbol?.toUpperCase()}/USD</p>
                            
                        </div>
                        <div className={s.coin_price}>
                            <h1>${coin.market_data?.current_price.usd.toLocaleString()}</h1>
                        </div>
                    </div>
                </div>

                <div className={s.content}>
                    <table>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1yr</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p style={{color: coin.market_data?.price_change_percentage_1h_in_currency?.usd.toFixed(1) >= 0 ? 'lightgreen' : 'red' }}>{coin.market_data?.price_change_percentage_1h_in_currency?.usd.toFixed(1)}%</p></td>
                                <td><p style={{color: coin.market_data?.price_change_percentage_24h_in_currency?.usd.toFixed(1) >= 0 ? 'lightgreen' : 'red' }}>{coin.market_data?.price_change_percentage_24h_in_currency?.usd.toFixed(1)}%</p></td>
                                <td><p style={{color: coin.market_data?.price_change_percentage_7d_in_currency?.usd.toFixed(1) >= 0 ? 'lightgreen' : 'red' }}>{coin.market_data?.price_change_percentage_7d_in_currency?.usd.toFixed(1)}%</p></td>
                                <td><p style={{color: coin.market_data?.price_change_percentage_14d_in_currency?.usd.toFixed(1) >= 0 ? 'lightgreen' : 'red' }}>{coin.market_data?.price_change_percentage_14d_in_currency?.usd.toFixed(1)}%</p></td>
                                <td><p style={{color: coin.market_data?.price_change_percentage_30d_in_currency?.usd.toFixed(1) >= 0 ? 'lightgreen' : 'red' }}>{coin.market_data?.price_change_percentage_30d_in_currency?.usd.toFixed(1)}%</p></td>
                                <td><p style={{color: coin.market_data?.price_change_percentage_1y_in_currency?.usd.toFixed(1) >= 0 ? 'lightgreen' : 'red' }}>{coin.market_data?.price_change_percentage_1y_in_currency?.usd.toFixed(1)}%</p></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={s.content}>
                    <div className={s.stats}>
                        <div className={s.left}>
                            <div className={s.row}>
                                <h4>24 Hour Low</h4>
                                <p>${coin.market_data?.low_24h.usd.toLocaleString()}</p>
                            </div>
                            <div className={s.row}>
                                <h4>24 Hour High</h4>
                                <p>${coin.market_data?.high_24h.usd.toLocaleString()}</p>
                            </div>
                        </div>
                        <div className={s.right}>
                            <div className={s.row}>
                                <h4>Market Cap</h4>
                                <p>${coin.market_data?.market_cap.usd.toLocaleString()}</p>
                            </div>
                            <div className={s.row}>
                                <h4>Circulating Supply</h4>
                                <p>{coin.market_data?.circulating_supply}</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div className={s.content}>
                    <div className={s.about}>
                        <h3>About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin?.description?.en),
                        }}>
                        
                        </p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CoinItemInfoPage