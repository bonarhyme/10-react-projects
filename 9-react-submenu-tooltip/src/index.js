import React from "react";
import ReactDOM from "react-dom";
import { SubMenuProvider } from "./SubMenu/Context";

import App from "./App";

ReactDOM.render(
  <SubMenuProvider>
    <App />
  </SubMenuProvider>,
  document.getElementById("root")
);
