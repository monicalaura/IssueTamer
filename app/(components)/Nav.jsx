import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-5">
        <Link href="/" className="logoLink">
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="mr-4"
          />
          <p className="text-lg text-textNav">
            Issue<span className="text-accent">Tamer</span>
          </p>
        </Link>
        <Link href="/IssuePage/new">
          <p className="text-base text-textNav hover:text-accent">
            Post an Issue
          </p>
        </Link>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
