import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FeedbackReplyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="feedbackId" source="feedbackId" />
        <TextInput label="replyerId" source="replyerId" />
        <TextInput label="comment" multiline source="comment" />
        <TextInput label="dateCreated" source="dateCreated" />
      </SimpleForm>
    </Create>
  );
};
