import * as React from "react";
import { Button } from "antd";

const CustomerList = () => {
  return (
    <div>
      Customer List
      <Button type="primary" href={"/customer/add"}>Add</Button>
    </div>
  );
}

export default CustomerList;