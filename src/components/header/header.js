import React from 'react';
import './header.scss';
import MainNav from '../../components/main-nav';

const Header = () => {

  return (
    <header className='page-header'>
      <MainNav/>
    </header>
  );
};

export default Header;
