import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const StudyGroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
