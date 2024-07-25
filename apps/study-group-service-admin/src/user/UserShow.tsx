import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <TextField label="contact" source="contact" />
        <BooleanField label="status" source="status" />
        <TextField label="uniqueId" source="uniqueId" />
        <TextField label="profileImage" source="profileImage" />
        <TextField label="dateJoined" source="dateJoined" />
      </SimpleShowLayout>
    </Show>
  );
};
