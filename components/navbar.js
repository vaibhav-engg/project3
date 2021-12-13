import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
    style={{
         border: "2px solid black",
        marginBottom: "3rem",
        fontSize: "1.2rem",
        padding: "8px 12px",
        background: "yellow",
      }}
    >
      <Link href="/">
        <a
        style={{margin : "20px"}}
        >
          Home
        </a>
      </Link>
      <Link href="/browse">
        <a>Browse</a>
      </Link>
    </nav>
  );
};

export default Navbar;