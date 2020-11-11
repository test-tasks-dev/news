import React from 'react';
import { useSelector } from 'react-redux';
import './index.scss';

const IndexPage = () => {
  const { name } = useSelector(store => store.authReducer);

  return (
    <main className='main-page'>
      <h2>Привет, {name}</h2>
    </main>
  );
};

export default IndexPage;
