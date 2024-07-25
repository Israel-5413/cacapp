import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PrivateChatEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <TextInput label="incomingMessageId" source="incomingMessageId" />
        <TextInput label="outgoingMessageId" source="outgoingMessageId" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Edit>
  );
};
