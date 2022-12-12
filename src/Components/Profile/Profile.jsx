import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styles';
import Box from '../Box/Box';

const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <Box
      minWidth="300px"
      maxWidth="500px"
      width="fit-content"
      m="auto"
      border="thin"
      borderRadius="sketchy1"
      bg="background"
      p={5}
    >
      <Description>
        <Avatar img={avatar}></Avatar>
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        {location && <Location>{location}</Location>}
      </Description>
      <Stats>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </Stats>
    </Box>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
