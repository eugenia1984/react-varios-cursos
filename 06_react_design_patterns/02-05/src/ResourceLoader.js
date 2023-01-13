import React, { useState, useEffect } from "react";
import axios from "axios";

export const REsourceLoader = ({ resourceURL, resourceName, children }) => {
  const [state, setState] = useState(null);

  // load the data from the server
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceURL);
      setState(response.data);
    })();
  }, [resourceURL]);

  return (
    <>
      {React.children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // we pass the user state
          return React.cloneElement(child, { [resourceName]: state });
        }

        // if it´s not valid
        return child;
      })}
    </>
  );
};
