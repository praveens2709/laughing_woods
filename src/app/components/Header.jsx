"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/_header.scss";
import logo from "../../../public/images/logo1.png";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="header pb-2">
      <Container>
        <Navbar expand="lg" variant="dark" className="d-flex justify-content-between align-items-center px-2 py-1 position-relative">

          <Navbar.Brand href="#" className="p-0">
            <Image
              src={logo}
              alt="Inspaire Logo"
              width={100}
              height={100}
              className="logo position-absolute"
              priority
            />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="navbarNav"
            onClick={() => setIsNavOpen(!isNavOpen)}
            className={isNavOpen ? "collapsed" : ""}
          />

          <Navbar.Collapse id="navbarNav" className={isNavOpen ? "show" : ""}>
            <Nav className="ms-auto">
              <Link className="nav-link" href="/" onClick={() => setIsNavOpen(false)}>Home</Link>
              <Link className="nav-link" href="/about" onClick={() => setIsNavOpen(false)}>About Us</Link>
              <Link className="nav-link" href="/portfolio" onClick={() => setIsNavOpen(false)}>Portfolio</Link>
              <Link className="nav-link" href="/contact" onClick={() => setIsNavOpen(false)}>Contact Us</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
