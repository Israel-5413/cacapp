import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const ResourceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="file" source="file" />
        <TextInput label="creatorId" source="creatorId" />
        <TextInput label="dateCreated" source="dateCreated" />
        <BooleanInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
