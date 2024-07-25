import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const StudyGroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uniqueId" source="uniqueId" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <BooleanField label="status" source="status" />
        <TextField label="category" source="category" />
        <TextField label="groupProfileImage" source="groupProfileImage" />
        <TextField label="creatorId" source="creatorId" />
        <TextField label="dateCreated" source="dateCreated" />
      </SimpleShowLayout>
    </Show>
  );
};
