import React from "react";
import ReactDOM  from "react-dom";

const parent = 
            React.createElement("div",{id:"parent"}, 
            React.createElement("div",{id:"child"}, 
            [React.createElement("h1",{id:"heading"}," ONJ"),
            React.createElement("h2",{id:"sibling"}," IND")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);