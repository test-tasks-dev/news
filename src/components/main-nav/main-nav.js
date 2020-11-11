import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core/';

import Modal from '../modal';
import AuthForm from '../auth-form';
import AddForm from '../add-form'
import { setUser } from '../../redux/actions/user';
import './main-nav.scss';

const MainNav = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showAddForm, setShowAddFrom] = useState(false);
  const { signed, name } = useSelector(state => state.authReducer);
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
    <Button
      variant='contained'
      color='primary'
      className='main-nav__button'
      onClick={() => setShowAuthForm(true)}
    >
      Вход
    </Button>
  );

  const btnOut = (
    <Button
      variant='contained'
      color='primary'
      className='main-nav__button'
      onClick={signOut}
    >
      Выход
    </Button>
  );

  const btnAdd = (
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
  );

  return (
    <>
      <ul className='main-nav'>
        <li className='main-nav__item'>
          <NavLink to='/' className='main-nav__link' activeClassName='main-nav__link_active'>Главная</NavLink>
        </li>
        <li className='main-nav__item'>
          <NavLink exact to='/news' className='main-nav__link' activeClassName='main-nav__link_active'>Новости</NavLink>
        </li>
        <li className='main-nav__item main-nav__item_left_auto'>
          {signed ? btnOut : btnIn}
        </li>
        {name === 'Иван' && btnAdd}
      </ul>
      {showAuthForm && authForm}
      {showAddForm && addForm}
    </>
  );
};

export default MainNav;
