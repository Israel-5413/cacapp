import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const TasksCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="taskBody" multiline source="taskBody" />
        <TextInput label="creatorId" source="creatorId" />
        <TextInput label="dateToStart" source="dateToStart" />
        <TextInput label="dateToFinish" source="dateToFinish" />
        <TextInput label="dateCreated" source="dateCreated" />
        <TextInput label="uniqueId" source="uniqueId" />
        <TextInput label="title" source="title" />
        <TextInput label="category" source="category" />
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
