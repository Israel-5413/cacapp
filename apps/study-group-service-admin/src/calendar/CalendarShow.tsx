import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CalendarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="start" source="start" />
        <TextField label="end" source="end" />
        <TextField label="description" source="description" />
        <TextField label="color" source="color" />
        <TextField label="icon" source="icon" />
      </SimpleShowLayout>
    </Show>
  );
};
