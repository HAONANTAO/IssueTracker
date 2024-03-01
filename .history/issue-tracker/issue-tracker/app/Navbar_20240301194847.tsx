import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Link href="./">Logo</Link>
      <ul>
        <li>
          <Link href="./">Logo</Link>
        </li>
        <li>
          <Link href="./">Logo</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
