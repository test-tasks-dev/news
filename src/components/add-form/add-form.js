import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setNews } from '../../redux/actions/news';

const AddForm = ({ hideModal }) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(setNews({
      title,
      text,
      date: `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()}`,
      approved: false
    }));

    hideModal();
  };

  const titleHandler = ({ target: { value } }) => {
    setTitle(value);
  };

  const textHandler = ({ target: { value } }) => {
    setText(value);
  };

  return (
    <form className='auth-form' onSubmit={submitHandler}>
      <div>
        <input
          className='auth-form__input'
          type='text' placeholder='Заголовок'
          required
          value={title}
          onChange={titleHandler}
        />
      </div>
      <div>
        <input
          className='auth-form__input'
          type='text'
          placeholder='Текст'
          required
          value={text}
          onChange={textHandler}
        />
      </div>
      {/*{authError.status ? <p
        className='auth-form__error-message'>{authError.message}</p> : null}*/}
      <div>
        <button
          className='auth-form__button'
          type='submit'
        >
          Добавить
        </button>
      </div>
    </form>
  );

};

export default AddForm;
