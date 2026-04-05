// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
// import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import { useRouter } from "next/navigation";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [shadow, setShadow] = useState(false);
//   const [navBg, setNavBg] = useState("#ecf0f3");
//   const [linkColor, setLinkColor] = useState("#1f2937");
//   //   const router = useRouter();

//   //   useEffect(() => {
//   //     if (
//   //       router.asPath === "/summarizer" ||
//   //       router.asPath === "/library" ||
//   //       router.asPath === "/netflix" ||
//   //       router.asPath === "/notes" ||
//   //       router.asPath === "/wordle"
//   //     ) {
//   //       setNavBg("transparent");
//   //       setLinkColor("#ecf0f3");
//   //     } else {
//   //       setNavBg("#ecf0f3");
//   //       setLinkColor("#1f2937");
//   //     }
//   //   }, [router]);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   useEffect(() => {
//     const handleShadow = () => {
//       if (window.scrollY >= 90) {
//         setShadow(true);
//       } else {
//         setShadow(false);
//       }
//     };
//     window.addEventListener("scroll", handleShadow);
//   }, []);

//   return (
//     <div
//       style={{ backgroundColor: `${navBg}` }}
//       className={
//         shadow ? "fixed w-full h-20 shadow-xl z-100" : "fixed w-full h-20 z-100"
//       }
//     >
//       <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
//         <Link href="/">
//           <Image src="/GabLogo.png" alt="/" width="95" height="20" />
//         </Link>
//         <div>
//           <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
//             <Link href="/">
//               <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
//             </Link>
//             <Link href="/#about">
//               <li className="ml-10 text-sm uppercase hover:border-b">About</li>
//             </Link>
//             <Link href="/#skills">
//               <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
//             </Link>
//             <Link href="/#projects">
//               <li className="ml-10 text-sm uppercase hover:border-b">
//                 Projects
//               </li>
//             </Link>
//             <Link href="/#contact">
//               <li className="ml-10 text-sm uppercase hover:border-b">
//                 Contact
//               </li>
//             </Link>
//           </ul>
//           <div onClick={handleNav} className="md:hidden">
//             <AiOutlineMenu size={25} />
//           </div>
//         </div>
//       </div>
//       <div
//         className={
//           nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
//         }
//       >
//         <div
//           className={
//             nav
//               ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-background p-10 ease-in duration-500"
//               : "fixed left-full top-0 p-10 ease-in duration-500"
//           }
//         >
//           <div>
//             <div className="flex w-full items-center justify-between">
//               <Link href="/">
//                 <Image src="/LOGO.jpg" alt="/" width={87} height={35} />
//               </Link>
//               <div
//                 onClick={handleNav}
//                 className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
//               >
//                 <AiOutlineClose />
//               </div>
//             </div>
//             <div className="border-b border-gray-300 my-4">
//               <p className="w-full md:w-[90%] py-4">
//                 Let us build something that makes a real difference together.
//               </p>
//             </div>
//           </div>
//           <div className="py-4 flex flex-col">
//             <ul className="uppercase">
//               <Link href="">
//                 <li onClick={() => setNav(false)} className="py-4 text-sm">
//                   Home
//                 </li>
//               </Link>
//               <Link href="/#about">
//                 <li onClick={() => setNav(false)} className="py-4 text-sm">
//                   About
//                 </li>
//               </Link>
//               <Link href="/#skills">
//                 <li onClick={() => setNav(false)} className="py-4 text-sm">
//                   Skills
//                 </li>
//               </Link>
//               <Link href="/#projects">
//                 <li onClick={() => setNav(false)} className="py-4 text-sm">
//                   Projects
//                 </li>
//               </Link>
//               <Link href="/#contact">
//                 <li onClick={() => setNav(false)} className="py-4 text-sm">
//                   Contact
//                 </li>
//               </Link>
//             </ul>
//             <div className="pt-5">
//               <p className="uppercase font-semibold tracking-widest text-primary">
//                 Let&#39;s connect
//               </p>
//               <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
//                 <a
//                   href="https://www.linkedin.com/in/gabrielochieng"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
//                     <FaLinkedinIn />
//                   </div>
//                 </a>
//                 <a
//                   href="https://github.com/GabrielOchieng"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
//                     <FaGithub />
//                   </div>
//                 </a>
//                 <Link href="/#contact">
//                   <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
//                     <AiOutlineMail />
//                   </div>
//                 </Link>
//                 <a
//                   href="https://drive.google.com/file/d/1DDV5_wiIQ9zJolJzG9a2vur_drSH0Si5/view?usp=drive_link"
//                   target="_blank"
//                 >
//                   <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
//                     <BsFillPersonLinesFill />
//                   </div>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-100 ease-in-out duration-300"
          : "fixed w-full h-20 z-100"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <Link href="/">
          {/* Fixed aspect ratio warning by adding height: auto */}
          <Image
            src="/GabLogo.png"
            alt="Gabriel Logo"
            width={100}
            height={40}
            style={{ height: "auto" }}
            priority
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-background p-10 ease-in duration-500"
              : "fixed left-full top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" onClick={() => setNav(false)}>
                <Image
                  src="/GabLogo.png"
                  alt="Logo"
                  width={87}
                  height={35}
                  style={{ height: "auto" }}
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-full md:w-[90%] py-4 text-gray-600">
                Building the next generation of intelligent systems
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
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
              <p className="uppercase font-semibold tracking-widest text-primary">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/gabrielochieng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/GabrielOchieng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact" onClick={() => setNav(false)}>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
