import React, { useEffect } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventList from './EventList';
import { useDispatch, useSelector } from 'react-redux';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilters from './EventFilters';
import {
  dataFromSnapshot,
  getEventsFromFirestore,
} from '../../../app/firestore/firestoreService';
import { listenToEvents } from '../eventActions';
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../../app/async/asyncReducer';

export default function EventDashboard() {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  useEffect(() => {
    dispatch(asyncActionStart());
    const unsubcribe = getEventsFromFirestore({
      next: (snapshot) => {
        dispatch(
          listenToEvents(
            snapshot.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot))
          )
        );
        dispatch(asyncActionFinish());
      },
      error: (error) => dispatch(asyncActionError()),
      complete: () => console.log('You will never see this message'),
    });
    // component unmount
    return unsubcribe;
  }, [dispatch]);

  return (
    <Grid>
      <GridColumn width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </GridColumn>
      <GridColumn width={6}>
        <EventFilters />
      </GridColumn>
    </Grid>
  );
}
