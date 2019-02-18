import * as React from "react";
import Link from "next/link";

export const Nav: React.FunctionComponent = props => (
  <nav>
    <h4>Nav Component:</h4>
    <ul className="list-reset inline-block">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/somepage">
          <a>Somepage</a>
        </Link>
      </li>
      <li>
        <Link href="/someotherpage">
          <a>Someotherpage</a>
        </Link>
      </li>
    </ul>
  </nav>
);
