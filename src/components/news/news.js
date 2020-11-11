import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { remove, approve } from '../../redux/actions/news';

import './news.scss';

const News = () => {
  const { news: allNews } = useSelector(state => state.newsReducer);
  let { news } = useSelector(state => state.newsReducer);
  const { name, signed } = useSelector(state => state.authReducer);
  const [value, setValue] = useState('');
  const [newsList, setNewsList] = useState(news);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setNewsList(news);
  }, [news]);

  useEffect(() => {
    if (!signed) {
      news = news.filter((oneNew) => oneNew.approved === true);
      setNewsList(news);
    } else {
      news = allNews;
      setNewsList(news);
    }
  }, [signed]);

  const onChangeHandler = ({ target: { value } }) => {
    setValue(value);

    news = news.filter(oneNew => oneNew.title.match(new RegExp(value, 'i')));

    if (name === 'Гость') {
      news = news.filter(oneNew => oneNew.approved);
    }

    setNewsList(news);
  };

  const btnApprove = (index) => (
    <Button
      variant='contained'
      color='primary'
      onClick={() => {
        dispatch(approve(index));
      }}
    >
      Одобрить
    </Button>
  );

  const btnRemove = (index) => (
    <Button
      variant='contained'
      color='secondary'
      onClick={() => {
        dispatch(remove(index))
      }}
    >
      Удалить
    </Button>
  );

  const renderList = () => {
    return (
      <ul className='news-list'>
        {
          newsList.map(({ title, text, date, approved }, idx) => (
            <li className='news-list__item' key={idx}>
              <h3 className='news-list__title'>{title}</h3>
              <p className='news-list__text'>{text}</p>
              <p className='news-list__date'>{date}</p>
              {
                name === 'Админ' && (
                  <p className='news-list__actions'>
                    {btnRemove(idx)}
                    {!approved && btnApprove(idx)}
                  </p>
                )
              }
            </li>
          ))
        }
      </ul>
    );
  };

  return (
    <>
      <div className='search-wrapper'>
        <input
          ref={inputRef}
          className='search'
          value={value}
          onChange={onChangeHandler}
          placeholder='Поиск по названию'
        />
      </div>
      {newsList.length ? renderList() : <h3>Ничего не найдено</h3>}
    </>
  );
};

export default News;
