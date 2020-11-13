import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import './zoom.scss';

export const Zoom = ({ inProp, children }) => (
  <CSSTransition
    in={inProp}
    timeout={500}
    classNames='zoom'
    unmountOnExit
  >
    {children}
  </CSSTransition>
);

Zoom.propTypes = {
  inProp: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};
