import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import styles from './overlay.style.scss';

export const Overlay = (props) => {
  const { active, onClick, color } = props;
  const className = classnames(styles.root, { [styles.active]: active, [styles[color]]: color });

  return <div className={className} onClick={onClick} />;
};

Overlay.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Overlay.defaultProps = {
  active: false,
  color: 'type',
  onClick: null,
};
