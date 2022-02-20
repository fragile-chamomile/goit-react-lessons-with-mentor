import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import Divider from '@mui/material/Divider';

import UserItem from './UserItem';
import users from '../data/users.json';

export default function UsersList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map(({id, name, website, company: { name: companyName } }) => (
        <ListItem alignItems="flex-start" key={id}>
          <UserItem 
            userWebsite={website}
            userName={name}
            userCompanyName={companyName}
          />
        </ListItem>
      ))}  
      {/* <Divider variant="inset" component="li" /> */}
    </List>
  );
}
