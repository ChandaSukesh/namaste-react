import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h4>
        <a href="/about"> About</a>
      </h4>

      <h4>
        <Link to="/contact">Contact</Link>
      </h4>
    </div>
  );
};

export default Header;
