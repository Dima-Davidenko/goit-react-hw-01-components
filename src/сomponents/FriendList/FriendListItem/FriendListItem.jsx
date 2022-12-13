import PropTypes from 'prop-types';
import { UserCard, Status, Avatar, Name } from './FriendListItem.style';

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <UserCard>
      <Status status={isOnline}></Status>
      <Avatar src={avatar}></Avatar>
      <Name>{name}</Name>
    </UserCard>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
