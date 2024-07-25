import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FeedbackReplyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FeedbackReplies"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="feedbackId" source="feedbackId" />
        <TextField label="replyerId" source="replyerId" />
        <TextField label="comment" source="comment" />
        <TextField label="dateCreated" source="dateCreated" />
      </Datagrid>
    </List>
  );
};
