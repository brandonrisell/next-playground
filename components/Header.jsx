import React from "react";
import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <button type="button" style={linkStyle}>
        Home
      </button>
    </Link>
    <Link href="/about">
      <button type="button" style={linkStyle}>
        About
      </button>
    </Link>
  </div>
);

export default Header;
