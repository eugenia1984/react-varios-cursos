import React from "react";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";

const userIds = ["123", "234", "345"];

function App() {
  return (
    <>
      <ResourceLoader resourceURL="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceURL="/products/1234" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
