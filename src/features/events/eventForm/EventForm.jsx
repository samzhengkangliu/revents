import React from 'react';
import { Button, Form, FormField, Header, Segment } from 'semantic-ui-react';

export default function EventForm({ setFormOpen }) {
  return (
    <Segment clearing>
      <Header content="Create new event" />
      <Form>
        <FormField>
          <input type="text" placeholder="Event title" />
        </FormField>
        <FormField>
          <input type="text" placeholder="Category" />
        </FormField>
        <FormField>
          <input type="text" placeholder="Description" />
        </FormField>
        <FormField>
          <input type="text" placeholder="City" />
        </FormField>
        <FormField>
          <input type="text" placeholder="Venue" />
        </FormField>
        <FormField>
          <input type="date" placeholder="Date" />
        </FormField>
        <Button type="submit" floated="right" positive content="Submit" />
        <Button
          floated="right"
          content="Cancel"
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  );
}
