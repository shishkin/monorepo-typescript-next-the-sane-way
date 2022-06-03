import React from "react";
import * as Calc from "@local/shared";

const HomePage = () => {
  return (
    <>
      <div>Hello World</div>
      <div>5 + 3 = {Calc.add(5, 3)}</div>
    </>
  );
};

export default HomePage;
