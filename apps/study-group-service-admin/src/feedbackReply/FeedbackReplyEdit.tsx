import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const FeedbackReplyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="feedbackId" source="feedbackId" />
        <TextInput label="replyerId" source="replyerId" />
        <TextInput label="comment" multiline source="comment" />
        <TextInput label="dateCreated" source="dateCreated" />
      </SimpleForm>
    </Edit>
  );
};
