import React from 'react';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import { Fade } from '../../lib/animations';
import './index.scss';

const IndexPage = () => {
  const { name } = useSelector(store => store.authReducer);
  const match = useRouteMatch();
  console.log(match);

  return (
    <Fade inProp={match.path === '/'}>
      <main className='main-page'>
        <h2>Привет, {name}</h2>
      </main>
    </Fade>
  );
};

export default IndexPage;
