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

export const MyFriendsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MyFriendsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="myUniqueId" source="myUniqueId" />
        <TextField label="friendsUniqueId" source="friendsUniqueId" />
        <BooleanField label="status" source="status" />
        <TextField label="dateCreated" source="dateCreated" />
      </Datagrid>
    </List>
  );
};
