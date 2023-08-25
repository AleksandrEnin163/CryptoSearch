import React from 'react'
import {FaCoins} from 'react-icons/fa'
import s from './NavBar.module.css'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <Link to='/'>
        <div className={s.navbar}>
            <FaCoins className={s.icon} />
            <h1> Coin <span className={s.purple}>Search</span></h1>
        </div>
    </Link>
  )
}

export default NavBar