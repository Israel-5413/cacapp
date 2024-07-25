import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const TasksEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
