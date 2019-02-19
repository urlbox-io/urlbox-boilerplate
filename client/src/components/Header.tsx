import * as React from "react";
import { Nav } from "./Nav";

export const Header: React.FunctionComponent = props => (
  <header className="p-3 bg-purple-darkest text-purple-light">
    <h1>Header Component</h1>
    <Nav />
  </header>
);
