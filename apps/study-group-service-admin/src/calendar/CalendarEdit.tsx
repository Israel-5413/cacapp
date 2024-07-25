import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const CalendarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <DateTimeInput label="start" source="start" />
        <DateTimeInput label="end" source="end" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="color" source="color" />
        <TextInput label="icon" source="icon" />
      </SimpleForm>
    </Edit>
  );
};
