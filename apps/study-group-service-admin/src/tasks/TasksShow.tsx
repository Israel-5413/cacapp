import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const TasksShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="taskBody" source="taskBody" />
        <TextField label="creatorId" source="creatorId" />
        <TextField label="dateToStart" source="dateToStart" />
        <TextField label="dateToFinish" source="dateToFinish" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="uniqueId" source="uniqueId" />
        <TextField label="title" source="title" />
        <TextField label="category" source="category" />
        <BooleanField label="status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};
