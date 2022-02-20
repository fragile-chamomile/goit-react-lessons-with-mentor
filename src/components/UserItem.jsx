import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

import PropTypes from 'prop-types';

const UserItem = ({ userWebsite, userName, userCompanyName }) => {
  return (
    <>
      <ListItemAvatar>
        <Avatar alt={userName} src="/static/images/avatar/1.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary={userWebsite}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'block' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {userName}
            </Typography>
            {userCompanyName}
          </React.Fragment>
        }
      />
    </>
  );
};

UserItem.propTypes = {
    userWebsite: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userCompanyName: PropTypes.string.isRequired,
};

export default UserItem;

