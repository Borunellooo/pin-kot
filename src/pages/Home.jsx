import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RotateSpinner } from 'react-spinners-kit';
import { Content } from '../components/content/Content';
import { Header } from '../components/header/Header';
import { LoadNextPage, LoadPost } from '../redux/actions';
import s from './Home.module.scss'
import { errorSelector, loadSelector } from '../redux/selectors';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const listener = (e) => {

      if (window.pageYOffset > 100) {
        setScrolled(true);
      }

      if (window.pageYOffset <= 100) {
        setScrolled(false);
      }
      
    };

    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  const load = useSelector(loadSelector)
  const error = useSelector(errorSelector)

  const dispatch = useDispatch()
  const add = () => {
    dispatch(LoadNextPage())
  }

  useEffect(() => {
    dispatch(LoadPost())
  }, [ dispatch ])

  if (error) {
    return (
      <div className={ s.wrapper_home }>
        <div className={ s.home } />
        <strong className={ s.error }>Oops, 404</strong>
      </div>
    )
  }
  if (load) {
    return (
      <div className={ s.wrapper_home }>
        <Header />
        <div className={ s.spiner }>
          <RotateSpinner
            size={ 45 }
            color="#fff"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={ s.wrapper_home }>
      <Header />
      <section className={ s.home }>
        <Content />
        <button className={ s.btn_scroll } onClick={ () => add() } />
      </section>
      {scrolled && <button className={ s.btn_scroll_up } onClick={ ()=>  window.scrollTo({top: 0, behavior: 'smooth'}) }></button>}
    </div>
  )
}

export { Home }
