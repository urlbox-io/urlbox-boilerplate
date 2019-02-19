import * as React from "react";
import Link from "next/link";

let links = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Somepage",
    href: "/somepage"
  },
  {
    name: "Some Other Page",
    href: "/someotherpage"
  }
];

export const Nav: React.FunctionComponent = props => (
  <nav>
    <h4 className="font-medium text-xs">Nav Component</h4>
    <ul className="list-reset">
      {links.map((l, i) => (
        <li key={i} className="inline mr-3">
          <Link href={l.href}>
            <a className="text-purple-lighter">{l.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
