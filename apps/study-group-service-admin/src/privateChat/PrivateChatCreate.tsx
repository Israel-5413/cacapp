import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PrivateChatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dateCreated" source="dateCreated" />
        <TextInput label="incomingMessageId" source="incomingMessageId" />
        <TextInput label="outgoingMessageId" source="outgoingMessageId" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Create>
  );
};
