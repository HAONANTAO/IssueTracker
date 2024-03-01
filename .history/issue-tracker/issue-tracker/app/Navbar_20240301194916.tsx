import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Link href="./">Logo</Link>
      <ul>
        <li>
          <Link href="./">Dashboard</Link>
        </li>
        <li>
          <Link href="./issue">Issue</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
