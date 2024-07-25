import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const MyFriendsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="myUniqueId" source="myUniqueId" />
        <TextInput label="friendsUniqueId" source="friendsUniqueId" />
        <BooleanInput label="status" source="status" />
        <TextInput label="dateCreated" source="dateCreated" />
      </SimpleForm>
    </Edit>
  );
};
