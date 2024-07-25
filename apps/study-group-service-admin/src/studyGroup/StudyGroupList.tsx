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

export const StudyGroupList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StudyGroups"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uniqueId" source="uniqueId" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <BooleanField label="status" source="status" />
        <TextField label="category" source="category" />
        <TextField label="groupProfileImage" source="groupProfileImage" />
        <TextField label="creatorId" source="creatorId" />
        <TextField label="dateCreated" source="dateCreated" />
      </Datagrid>
    </List>
  );
};
