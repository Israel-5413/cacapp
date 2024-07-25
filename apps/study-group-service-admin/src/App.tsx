import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ResourceList } from "./resource/ResourceList";
import { ResourceCreate } from "./resource/ResourceCreate";
import { ResourceEdit } from "./resource/ResourceEdit";
import { ResourceShow } from "./resource/ResourceShow";
import { MeetingList } from "./meeting/MeetingList";
import { MeetingCreate } from "./meeting/MeetingCreate";
import { MeetingEdit } from "./meeting/MeetingEdit";
import { MeetingShow } from "./meeting/MeetingShow";
import { StudyGroupList } from "./studyGroup/StudyGroupList";
import { StudyGroupCreate } from "./studyGroup/StudyGroupCreate";
import { StudyGroupEdit } from "./studyGroup/StudyGroupEdit";
import { StudyGroupShow } from "./studyGroup/StudyGroupShow";
import { CommentSectionList } from "./commentSection/CommentSectionList";
import { CommentSectionCreate } from "./commentSection/CommentSectionCreate";
import { CommentSectionEdit } from "./commentSection/CommentSectionEdit";
import { CommentSectionShow } from "./commentSection/CommentSectionShow";
import { PrivateChatList } from "./privateChat/PrivateChatList";
import { PrivateChatCreate } from "./privateChat/PrivateChatCreate";
import { PrivateChatEdit } from "./privateChat/PrivateChatEdit";
import { PrivateChatShow } from "./privateChat/PrivateChatShow";
import { CalendarList } from "./calendar/CalendarList";
import { CalendarCreate } from "./calendar/CalendarCreate";
import { CalendarEdit } from "./calendar/CalendarEdit";
import { CalendarShow } from "./calendar/CalendarShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { FeedbackReplyList } from "./feedbackReply/FeedbackReplyList";
import { FeedbackReplyCreate } from "./feedbackReply/FeedbackReplyCreate";
import { FeedbackReplyEdit } from "./feedbackReply/FeedbackReplyEdit";
import { FeedbackReplyShow } from "./feedbackReply/FeedbackReplyShow";
import { MyFriendsList } from "./myFriends/MyFriendsList";
import { MyFriendsCreate } from "./myFriends/MyFriendsCreate";
import { MyFriendsEdit } from "./myFriends/MyFriendsEdit";
import { MyFriendsShow } from "./myFriends/MyFriendsShow";
import { TasksList } from "./tasks/TasksList";
import { TasksCreate } from "./tasks/TasksCreate";
import { TasksEdit } from "./tasks/TasksEdit";
import { TasksShow } from "./tasks/TasksShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Study Group Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Resource"
          list={ResourceList}
          edit={ResourceEdit}
          create={ResourceCreate}
          show={ResourceShow}
        />
        <Resource
          name="Meeting"
          list={MeetingList}
          edit={MeetingEdit}
          create={MeetingCreate}
          show={MeetingShow}
        />
        <Resource
          name="StudyGroup"
          list={StudyGroupList}
          edit={StudyGroupEdit}
          create={StudyGroupCreate}
          show={StudyGroupShow}
        />
        <Resource
          name="CommentSection"
          list={CommentSectionList}
          edit={CommentSectionEdit}
          create={CommentSectionCreate}
          show={CommentSectionShow}
        />
        <Resource
          name="PrivateChat"
          list={PrivateChatList}
          edit={PrivateChatEdit}
          create={PrivateChatCreate}
          show={PrivateChatShow}
        />
        <Resource
          name="Calendar"
          list={CalendarList}
          edit={CalendarEdit}
          create={CalendarCreate}
          show={CalendarShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="FeedbackReply"
          list={FeedbackReplyList}
          edit={FeedbackReplyEdit}
          create={FeedbackReplyCreate}
          show={FeedbackReplyShow}
        />
        <Resource
          name="MyFriends"
          list={MyFriendsList}
          edit={MyFriendsEdit}
          create={MyFriendsCreate}
          show={MyFriendsShow}
        />
        <Resource
          name="Tasks"
          list={TasksList}
          edit={TasksEdit}
          create={TasksCreate}
          show={TasksShow}
        />
      </Admin>
    </div>
  );
};

export default App;
