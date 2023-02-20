import PropTypes from 'prop-types';
import css from '../FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ item: { avatar, name, isOnline } }) => {
  return (
    <div className={css.item}>
      <span className={isOnline ? css.isOnline : css.isOffline}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  item: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
