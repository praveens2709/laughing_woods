'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@styles/_header.scss";
import logo from "@assets/images/logo1.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import gsap from "gsap";
import Button from "./Button";

const Header = ({ isLoading }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isLoading) {
      console.log('GSAP Animation Triggered');
      const tl = gsap.timeline();
      tl.fromTo(
        ".logo",
        { y: "-100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );
      tl.to(".header", {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }, "-=0.10");
    }
  }, [isLoading, mounted]);

  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    if (navbarToggler && window.innerWidth < 992) {
      navbarToggler.click();
    }
  };

  return (
    <>
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
      <header className="header" style={{ opacity: 0 }}>
        <Container>
          <Navbar expand="lg" variant="dark" className="d-flex justify-content-between align-items-center ps-2 pe-0 py-0 position-relative border-0">
            <Navbar.Brand href="#" className="p-0">
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarNav" className="navbar-toggler" />

            <Navbar.Collapse id="navbarNav">
              <Nav className="ms-auto align-items-center gap-3">
                <Link className="nav-link" href="/" onClick={closeNavbar}>Home</Link>
                <Link className="nav-link" href="/portfolio" onClick={closeNavbar}>Portfolio</Link>
                <Link className="nav-link" href="/contact" onClick={closeNavbar}>Contact Us</Link>
                <Link className="nav-link p-0" href="/get-estimates">
                  <Button text="Get Estimates" variant="primary" animate={true} onClick={closeNavbar} />
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </>
  );
};

export default Header;
