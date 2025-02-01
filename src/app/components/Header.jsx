'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/_header.scss";
import logo from "../../../public/images/logo1.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import gsap from "gsap";

const Header = ({ isLoading }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      const tl = gsap.timeline();

      // Logo animation (independent from header)
      tl.fromTo(
        ".logo",
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );

      // Header fade-in (AFTER logo animation)
      tl.to(".header", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, "-=0.10"); // Starts slightly before logo animation ends
    }
  }, [isLoading]);

  return (
    <>
      {/* Logo positioned separately */}
      <div className="logo-container">
        <Image
          src={logo}
          alt="Inspaire Logo"
          width={100}
          height={100}
          className="logo"
          priority
        />
      </div>

      {/* Header (now animates separately) */}
      <header className="header" style={{ opacity: 0 }}> {/* Initially hidden */}
        <Container>
          <Navbar expand="lg" variant="dark" className="d-flex justify-content-between align-items-center px-2 py-1 position-relative">
            <Navbar.Brand href="#" className="p-0">
              {/* Logo is removed from here to separate its animation */}
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
    </>
  );
};

export default Header;
