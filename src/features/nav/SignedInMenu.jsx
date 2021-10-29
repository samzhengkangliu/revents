import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Dropdown, Image, MenuItem } from 'semantic-ui-react';
import { signOutUser } from '../auth/authActions';

export default function SignedInMenu() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.auth);

  return (
    <MenuItem position="right">
      <Image
        avatar
        spaced="right"
        src={currentUser.photoURL || '/assets/user.png'}
      />
      <Dropdown pointing="top left" text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item as={Link} text="My Profile" icon="user" />
          <Dropdown.Item
            as={Link}
            text="Sign Out"
            icon="power"
            onClick={() => {
              dispatch(signOutUser());
              history.push('/');
            }}
          />
        </Dropdown.Menu>
      </Dropdown>
    </MenuItem>
  );
}
