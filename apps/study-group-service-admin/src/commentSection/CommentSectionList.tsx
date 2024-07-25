import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const CommentSectionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CommentSections"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="category" source="category" />
        <TextField label="message" source="message" />
        <TextField label="creatorId" source="creatorId" />
        <TextField label="dateCreated" source="dateCreated" />
        <BooleanField label="status" source="status" />
        <TextField label="uniqueId" source="uniqueId" />
      </Datagrid>
    </List>
  );
};
