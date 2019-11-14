import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/layout/button/button';
import { Link } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import styles from './team-member.style.scss';

export const TeamMember = props => {
  const { description, name, img, title, id } = props;
  const imageExists = Boolean(img);

  return (
    <>
      <div className={styles.root}>
        {imageExists && (
          <div className={styles.avatar}>
            <img src={img} alt={name} />
          </div>
        )}
        <div className={styles.content}>
          <div>
            <strong>{name}</strong>
          </div>
          <div className="border--bottom margin--bottom padding--bottom--half">{title}</div>
          <div className={styles.description}>{description}</div>
          <Link to={`${ROUTES.TEAM.path}/${id}`} style={{ textDecoration: 'none' }}>
            <Button className="display--block margin--top" style={{ width: '100%' }}>
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

TeamMember.propTypes = {
  description: PropTypes.string,
  id: PropTypes.number,
  img: PropTypes.node,
  name: PropTypes.string,
  title: PropTypes.string
};

TeamMember.defaultProps = {
  description: '',
  id: null,
  img: null,
  name: '',
  title: ''
};
