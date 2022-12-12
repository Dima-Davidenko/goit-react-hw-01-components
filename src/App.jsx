import { Profile, Box, Statistics, FriendList, TransactionHistory } from './Components/index';
import { boxSettings } from './utils/boxSettings';
import user from './db/user.json';
import data from './db/data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

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
