import * as React from "react";
import * as classnames from "classnames";

export const Home: React.FunctionComponent = props => (
  <div className="p-4 shadow rounded bg-white">
    <h1 className="text-purple leading-normal">Next.js</h1>
    <p className="text-grey-dark">with tailwind!</p>
    <ul className="list-reset">
      <li>usage classnames in Home.tsx</li>
    </ul>
  </div>
);
