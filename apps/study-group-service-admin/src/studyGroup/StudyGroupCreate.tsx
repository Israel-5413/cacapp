import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const StudyGroupCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="uniqueId" source="uniqueId" />
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="status" source="status" />
        <TextInput label="category" source="category" />
        <TextInput label="groupProfileImage" source="groupProfileImage" />
        <TextInput label="creatorId" source="creatorId" />
        <TextInput label="dateCreated" source="dateCreated" />
      </SimpleForm>
    </Create>
  );
};
