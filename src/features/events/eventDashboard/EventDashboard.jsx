import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import EventList from './EventList';
import { useSelector } from 'react-redux';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilters from './EventFilters';

export default function EventDashboard() {
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

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
