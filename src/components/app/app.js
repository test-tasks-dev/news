import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

import Header from '../../components/header';
import IndexPage from '../../pages/index';
import NewsPage from '../../pages/news/news';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='app'>
          <Header/>
          <Switch>
            <Route path='/' exact component={IndexPage}/>
            <Route path='/news' exact component={NewsPage}/>
            {/*<Route component={Page404}/>*/}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;