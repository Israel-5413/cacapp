import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FeedbackReplyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="feedbackId" source="feedbackId" />
        <TextField label="replyerId" source="replyerId" />
        <TextField label="comment" source="comment" />
        <TextField label="dateCreated" source="dateCreated" />
      </SimpleShowLayout>
    </Show>
  );
};
