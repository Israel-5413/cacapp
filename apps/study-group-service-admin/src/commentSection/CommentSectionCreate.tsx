import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const CommentSectionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="category" source="category" />
        <TextInput label="message" multiline source="message" />
        <TextInput label="creatorId" source="creatorId" />
        <TextInput label="dateCreated" source="dateCreated" />
        <BooleanInput label="status" source="status" />
        <TextInput label="uniqueId" source="uniqueId" />
      </SimpleForm>
    </Create>
  );
};
