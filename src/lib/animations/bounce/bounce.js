import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './bounce.scss';

export const Bounce = ({ inProp, children }) => (
  <CSSTransition
    in={inProp}
    timeout={500}
    classNames='bounce'
    unmountOnExit
  >
    {children}
  </CSSTransition>
);
