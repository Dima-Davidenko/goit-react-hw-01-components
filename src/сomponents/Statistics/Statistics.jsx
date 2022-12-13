import PropTypes from 'prop-types';
import { Title, Stats, StatsItem } from './Statistics.style';
import Box from '../Box/Box';

const Statistics = ({ title, stats = [] }) => {
  return (
    <Box
      minWidth="300px"
      width="fit-content"
      m="auto"
      bg="primaryLight"
      border="thin"
      borderRadius="sketchy2"
      p="4"
    >
      {title && <Title>{title}</Title>}
      <Stats>
        {stats.map(({ id, label, percentage }) => {
          return (
            <StatsItem key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </StatsItem>
          );
        })}
      </Stats>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
