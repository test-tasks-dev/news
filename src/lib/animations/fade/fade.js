import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import './fade.scss';

export const Fade = ({ inProp, children }) => (
  <CSSTransition
    in={inProp}
    timeout={500}
    classNames='fade'
    unmountOnExit
  >
    {children}
  </CSSTransition>
);

Fade.propTypes = {
  inProp: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
