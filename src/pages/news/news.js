import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import { Fade } from '../../lib/animations';
import News from '../../components/news';

const NewsPage = () => {
  const match = useRouteMatch();
  console.log(match.path);

  return (
    <Fade inProp={match.path === '/news'}>
      <main className='news-page'>
        <News/>
      </main>
    </Fade>
  );
};

export default NewsPage;
