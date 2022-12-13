import PropTypes from 'prop-types';
import { FrienListUl } from './FriendList.style';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends = [] }) => {
  return (
    <FrienListUl>
      {friends.map(({ id, ...restProps }) => {
        return <FriendListItem key={id} {...restProps}></FriendListItem>;
      })}
    </FrienListUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
