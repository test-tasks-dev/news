import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setUser } from '../../redux/actions/user';
import './auth-form.scss';

const AuthForm = ({ hideModal }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState({ status: false, message: '' });
  const dispatch = useDispatch();
  const nameRef = useRef(null);

  useEffect(() => {
    const nameField = nameRef.current;
    nameField.focus();
  }, []);

  const invalidData = () => {
    return (name.trim() !== 'Иван' || password.trim() !== '123') && (name.trim() !== 'Админ' || password.trim() !== '456');
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (invalidData()) return setAuthError({ status: true, message: 'Неверное имя или пароль' });

    setAuthError({ status: false, message: '' });
    dispatch(setUser({ name, password, signed: true }));
    hideModal();
  };

  const nameHandler = ({ target: { value } }) => {
    setName(value);
  };

  const passwordHandler = ({ target: { value } }) => {
    setPassword(value);
  };

  return (
    <form className='auth-form' onSubmit={submitHandler}>
      <div>
        <input
          className='auth-form__input'
          type='text' placeholder='Логин'
          required
          value={name}
          onChange={nameHandler}
          ref={nameRef}
        />
      </div>
      <div>
        <input
          className='auth-form__input'
          type='password'
          placeholder='Пароль'
          required
          value={password}
          onChange={passwordHandler}
        />
      </div>
      {authError.status ? <p
        className='auth-form__error-message'>{authError.message}</p> : null}
      <div>
        <button
          className='auth-form__button'
          type='submit'
        >
          Вход
        </button>
      </div>
    </form>
  );
};

export default AuthForm;
