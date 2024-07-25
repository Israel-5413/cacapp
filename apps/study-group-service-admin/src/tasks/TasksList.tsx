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

export const TasksList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TasksItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="taskBody" source="taskBody" />
        <TextField label="creatorId" source="creatorId" />
        <TextField label="dateToStart" source="dateToStart" />
        <TextField label="dateToFinish" source="dateToFinish" />
        <TextField label="dateCreated" source="dateCreated" />
        <TextField label="uniqueId" source="uniqueId" />
        <TextField label="title" source="title" />
        <TextField label="category" source="category" />
        <BooleanField label="status" source="status" />
      </Datagrid>
    </List>
  );
};
