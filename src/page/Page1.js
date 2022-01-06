import React from "react";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";

function Page1() {
  return (
    <div className="p-6">
      Page 1
      <Component1 />
      <Component2 />
    </div>
  );
}

export default Page1;