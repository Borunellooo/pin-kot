import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header } from '../components/header/Header';
import { FlagFavourites } from '../redux/actions';
import { allBdSelector, flagSelector } from '../redux/selectors';
import s from './Favourites.module.scss'

const Favourites = () => {
  const store = useSelector(allBdSelector)
  const flag = useSelector(flagSelector)
  const dispatch = useDispatch()

  const flagFavourites = (id, title, photo, video) => {
    dispatch(FlagFavourites({
      id, title, photo, video,
    }))
  }

  return (
    <div className={ s.wrapper_favourites }>
      <Header />
      <section className={ s.favourites }>
        {flag.map(el => (
          <div key={ el.id } className={ s.content_cart }>
            <h2 className={ s.cart_title }>{el.title}</h2>
            {el.media.photo
              ? (
                <img className={ s.cart_photo } alt="HP" src={ el.media.photo } />
              )
              : (
                <video controls="controls" autoPlay loop className={ s.cart_photo } alt="HP" src={ el.media.video } />
              ) }
            <div className={ s.text_cart }>
              <button className={ s.btn_favourites_on } onClick={ () => flagFavourites(el.id, el.title, el.media.photo, el.media.video) } />
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export { Favourites }
