import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PrivateChatShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="incomingMessageId" source="incomingMessageId" />
        <TextField label="outgoingMessageId" source="outgoingMessageId" />
        <TextField label="message" source="message" />
      </SimpleShowLayout>
    </Show>
  );
};
