import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const MyFriendsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="myUniqueId" source="myUniqueId" />
        <TextInput label="friendsUniqueId" source="friendsUniqueId" />
        <BooleanInput label="status" source="status" />
        <TextInput label="dateCreated" source="dateCreated" />
      </SimpleForm>
    </Create>
  );
};
