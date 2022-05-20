import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/icon_header.png'
import s from './Header.module.scss'

export const Header = () => (
  <header className={ s.wrapper_header }>
    <div className={ s.header }>
      <img alt="icon_HP" src={ logo } className={ s.icon_hp } />
      <h1 className={ s.heading }>Pin-Kot</h1>
      <div className={ s.wrapper_favourites }>
        <Link className="link_none" to="/favourites">
          <button className={ s.btn_favourites } />
        </Link>
        <p>Favourites</p>
      </div>
    </div>
    <div className={ s.stripe } />
  </header>
)
