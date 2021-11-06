import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
// Redux
import { listenToSelectedUserProfile } from '../profileActions';
// Components
import ProfileContent from './ProfileContent';
import ProfileHeader from './ProfileHeader';
import LoadingComponent from '../../../app/layout/LoadingComponent';
// Hook
import useFirestoreHook from '../../../app/hooks/useFirestoreDoc';
// API
import { getUserProfile } from '../../../app/firestore/firestoreService';

export default function ProfilePage({ match }) {
  const dispatch = useDispatch();
  const { selectedUserProfile } = useSelector((state) => state.profile);
  const { currentUser } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.async);

  useFirestoreHook({
    query: () => getUserProfile(match.params.id),
    data: (profile) => dispatch(listenToSelectedUserProfile(profile)),
    deps: [dispatch, match.params.id],
  });

  if ((loading && !selectedUserProfile) || (!selectedUserProfile && !error))
    return <LoadingComponent content="Loading profile..." />;

  return (
    <Grid>
      <Grid.Column width={16}>
        <ProfileHeader
          profile={selectedUserProfile}
          isCurrentUser={currentUser.uid === selectedUserProfile.id}
        />
        <ProfileContent
          profile={selectedUserProfile}
          isCurrentUser={currentUser.uid === selectedUserProfile.id}
        />
      </Grid.Column>
    </Grid>
  );
}
