import React, { useState } from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
// Redux
import { listenToEvents } from '../eventActions';
// Components
import EventList from './EventList';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilters from './EventFilters';
// API
import { listenToEventsFromFirestore } from '../../../app/firestore/firestoreService';
// Hooks
import useFireStoreCollection from '../../../app/hooks/useFirestoreCollection';

export default function EventDashboard() {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);
  const [predicate, setPredicate] = useState(
    new Map([
      ['startDate', new Date()],
      ['filter', 'all'],
    ])
  );

  function handleSetPredicate(key, value) {
    setPredicate(new Map(predicate.set(key, value)));
  }

  useFireStoreCollection({
    query: () => listenToEventsFromFirestore(predicate),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch, predicate],
  });

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
        <EventFilters
          predicate={predicate}
          setPredicate={handleSetPredicate}
          loading={loading}
        />
      </GridColumn>
    </Grid>
  );
}
