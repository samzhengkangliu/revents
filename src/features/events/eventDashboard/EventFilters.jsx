import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { Calendar } from 'react-calendar';

export default function EventFilters() {
  return (
    <>
      <Menu vertical size="large" style={{ width: '100%' }}>
        <Header icon="filter" attached color="teal" content="Filters" />
        <Menu.Item content="All Events"></Menu.Item>
        <Menu.Item content="I'm going"></Menu.Item>
        <Menu.Item content="I'm hosting"></Menu.Item>
      </Menu>
      <Header icon="calendar" attached color="teal" content="Select date" />
      <Calendar />
    </>
  );
}
