import React from 'react';
import css from '../Container/Container.module.css';
import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.array,
};
