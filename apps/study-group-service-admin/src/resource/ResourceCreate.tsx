import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ResourceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="file" source="file" />
        <TextInput label="creatorId" source="creatorId" />
        <TextInput label="dateCreated" source="dateCreated" />
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
