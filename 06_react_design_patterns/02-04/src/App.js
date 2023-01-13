import React from "react";

import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";

const userIds = ["123", "234", "345"];

function App() {
  return (
    <UserLoader userId="123">
      {userId.map((user) => (
        <UserInfo userId={user} />
      ))}
      <UserInfo />
    </UserLoader>
  );
}

export default App;
