import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './Content.module.scss'
import { FlagFavourites } from '../../redux/actions';
import {
  allBdSelector, errorSelector, flagSelector, loadSelector,
} from '../../redux/selectors';

const Content = () => {
  const dispatch = useDispatch()
  const store = useSelector(allBdSelector)
  const load = useSelector(loadSelector)
  const error = useSelector(errorSelector)
  const flag = useSelector(flagSelector)

  const flagFavourites = (id, title, photo, video) => {
    dispatch(FlagFavourites({
      id, title, photo, video,
    }))
  }

  return (
    <div className={ s.wrapper_content }>
      {(!load && !error) && (store || []).map(el => (
        <div key={ el.id } className={ s.content_cart }>
          <h2 className={ s.cart_title }>{el.title}</h2>
          <div className={ s.wrapper_cart_photo }>
            {el.media.photo
              ? (
                <img className={ s.cart_photo } alt="HP" src={ el.media.photo } />
              )
              : (
                <video controls="controls" autoPlay loop className={ s.cart_photo } alt="HP" src={ el.media.video } />
              ) }
          </div>
          <div className={ s.btn_cart }>
            {flag.map(o => o.id).includes(el.id) ? (
              <button className={ s.btn_favourites_on } onClick={ () => flagFavourites(el.id, el.title, el.media.photo, el.media.video) } />
            ) : (
              <button className={ s.btn_favourites } onClick={ () => flagFavourites(el.id, el.title, el.media.photo, el.media.video) } />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export { Content }
