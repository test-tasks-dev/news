import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core/';

import Modal from '../modal';
import AuthForm from '../auth-form';
import AddForm from '../add-form'
import { Bounce, Fade } from '../../lib/animations';
import { setUser } from '../../redux/actions/user';
import './main-nav.scss';

const MainNav = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showAddForm, setShowAddFrom] = useState(false);
  const { signed } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(setUser({
      name: 'Гость',
      password: '',
      signed: false
    }));
  };

  const authForm = (
    <Modal hideModal={() => setShowAuthForm(false)}>
      <AuthForm hideModal={() => setShowAuthForm(false)}/>
    </Modal>
  );

  const addForm = (
    <Modal hideModal={() => setShowAddFrom(false)}>
      <AddForm hideModal={() => setShowAddFrom(false)}/>
    </Modal>
  );

  const btnIn = (
    <Fade inProp={!signed}>
      <Button
        variant='contained'
        color='primary'
        className='main-nav__button'
        onClick={() => {
          setShowAuthForm(true);
        }}
      >
        Вход
      </Button>
    </Fade>
  );

  const btnOut = (
    <Fade inProp={signed}>
      <Button
        variant='contained'
        color='primary'
        className='main-nav__button'
        onClick={signOut}
      >
        Выход
      </Button>
    </Fade>
  );

  return (
    <>
      <ul className='main-nav'>
        <li className='main-nav__item'>
          <NavLink to='/' className='main-nav__link' activeClassName='main-nav__link_active'>Главная</NavLink>
        </li>
        <li className='main-nav__item'>
          <NavLink exact to='/news' className='main-nav__link'
                   activeClassName='main-nav__link_active'>Новости</NavLink>
        </li>
        <li className='main-nav__item main-nav__item_left_auto'>
          {btnIn}
          {btnOut}
        </li>

        <Bounce inProp={signed}>
          <li className='main-nav__item'>
            <Button
              style={{ backgroundColor: 'green', color: 'white' }}
              variant='contained'
              className='main-nav__button'
              onClick={() => setShowAddFrom(true)}
            >
              Добавить новость
            </Button>
          </li>
        </Bounce>
      </ul>
      {showAuthForm && authForm}
      {showAddForm && addForm}
    </>
  );
};

export default MainNav;
