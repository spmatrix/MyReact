import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { PropsTest } from "../PropsTest";
import RenderTest from "../RenderTest";

const element = (
  <Fragment>
    <PropsTest name="rams111" />;
    <RenderTest />;
  </Fragment>
);

ReactDOM.render(element, document.getElementById("root"));
