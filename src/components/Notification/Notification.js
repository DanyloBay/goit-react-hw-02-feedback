import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={css.notificationMessage}>{message}</p>;
};

Notification.prototype = {
  message: PropTypes.string.isRequired,
};
