import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const MyFriendsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="myUniqueId" source="myUniqueId" />
        <TextField label="friendsUniqueId" source="friendsUniqueId" />
        <BooleanField label="status" source="status" />
        <TextField label="dateCreated" source="dateCreated" />
      </SimpleShowLayout>
    </Show>
  );
};
