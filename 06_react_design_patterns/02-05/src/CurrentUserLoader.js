import React, { useState, useEffect } from "react";
import axios from "axios";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  // load the data from the server
  useEffect(() => {
    // anonymous asynct function
    (async () => {
      // store the data od the current user
      const response = await axios.get("/current-user");
      const currentUser = response.data;
      setUser(currentUser);
    })();
  }, []);

  return (
    <>
      {React.children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // we pass the user state
          return React.cloneElement(child, { user });
        }

        // if it´s not valid
        return child;
      })}
    </>
  );
};
