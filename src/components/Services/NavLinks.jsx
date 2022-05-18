import React from "react";

function NavLinks({ onScrollContact }) {
  return (
    <React.Fragment>
      <div>
        <li>Home</li>
      </div>

      <div>
        <li>About</li>
      </div>

      <div>
        <li>Projects</li>
      </div>

      <div>
        <li>Resume</li>
      </div>

      <div>
        <li onClick={onScrollContact}>Contact</li>
      </div>
    </React.Fragment>
  );
}

export default NavLinks;
