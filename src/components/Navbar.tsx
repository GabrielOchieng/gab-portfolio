"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = React.useRef<HTMLElement>(null);

  const handleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 40);

      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      navRef.current?.style.setProperty(
        "--scroll-progress",
        `${Math.min(100, Math.max(0, progress))}%`,
      );
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <nav ref={navRef}>
        <Link href="/" className="wordmark">
          GO<span>/</span>
        </Link>

        <div className="nav-links hidden md:flex">
          <Link href="/#home" className="is-active">
            Home
          </Link>
          <Link href="/#about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#projects">Projects</Link>
        </div>

        <div className="nav-actions">
          <div className="hidden md:flex items-center gap-[7px]">
            <a
              href="https://www.linkedin.com/in/gabrielochieng"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="nav-social"
            >
              <FaLinkedinIn size={15} />
            </a>
            <a
              href="https://github.com/GabrielOchieng"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="nav-social"
            >
              <FaGithub size={15} />
            </a>
            <Link href="/#contact" className="button-tactile nav-contact">
              Let&#39;s talk <span aria-hidden="true">&#8599;</span>
            </Link>
          </div>

          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-paper-bright p-10 ease-in duration-500"
              : "fixed left-full top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" onClick={() => setNav(false)} className="wordmark">
                GO<span>/</span>
              </Link>
              <div onClick={handleNav} className="pill-link p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-line my-4">
              <p className="w-full py-4 text-muted">
                Building the next generation of intelligent systems
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase font-mono">
              <Link href="/#home" onClick={() => setNav(false)}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about" onClick={() => setNav(false)}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills" onClick={() => setNav(false)}>
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects" onClick={() => setNav(false)}>
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/#contact" onClick={() => setNav(false)}>
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-10">
              <p className="eyebrow">Let&#39;s connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/gabrielochieng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="pill-link p-3 text-primary">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/GabrielOchieng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="pill-link p-3 text-primary">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact" onClick={() => setNav(false)}>
                  <div className="pill-link p-3 text-primary">
                    <AiOutlineMail />
                  </div>
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <div className="pill-link p-3 text-primary">
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
