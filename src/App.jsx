import { Profile, Box, Statistics, FriendList, TransactionHistory } from './сomponents/index';
import { boxSettings } from './data/boxSettings';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <>
      <Box {...boxSettings}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Box>
      <Box {...boxSettings}>
        <Statistics title="Statistics" stats={data}></Statistics>
      </Box>
      <Box {...boxSettings} display="flex" justifyContent="center">
        <FriendList friends={friends}></FriendList>
      </Box>
      <Box {...boxSettings} display="flex" justifyContent="center">
        <TransactionHistory items={transactions}></TransactionHistory>
      </Box>
    </>
  );
}
