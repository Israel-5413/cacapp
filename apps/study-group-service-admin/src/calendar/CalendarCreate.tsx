import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CalendarCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <DateTimeInput label="start" source="start" />
        <DateTimeInput label="end" source="end" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="color" source="color" />
        <TextInput label="icon" source="icon" />
      </SimpleForm>
    </Create>
  );
};
