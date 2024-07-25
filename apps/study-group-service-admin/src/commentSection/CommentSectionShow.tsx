import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const CommentSectionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="category" source="category" />
        <TextField label="message" source="message" />
        <TextField label="creatorId" source="creatorId" />
        <TextField label="dateCreated" source="dateCreated" />
        <BooleanField label="status" source="status" />
        <TextField label="uniqueId" source="uniqueId" />
      </SimpleShowLayout>
    </Show>
  );
};
