import React from "react";
import { Link } from "react-scroll";

function NavLinks({ onCloseDrawer }) {
  return (
    <React.Fragment>
      <div>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1500}
            onClick={onCloseDrawer}
          >
            Home
          </Link>
        </li>
      </div>

      <div>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={1500}
            onClick={onCloseDrawer}
          >
            About
          </Link>
        </li>
      </div>

      <div>
        <li>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={1500}
            onClick={onCloseDrawer}
          >
            Projects
          </Link>
        </li>
      </div>

      <div>
        <li>
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            duration={1500}
            onClick={onCloseDrawer}
          >
            Resume
          </Link>
        </li>
      </div>

      <div>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={1500}
            onClick={onCloseDrawer}
          >
            Contact
          </Link>
        </li>
      </div>
    </React.Fragment>
  );
}

export default NavLinks;
