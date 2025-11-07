"use client";

import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="logo-top-left">
        <Link href="https://diecezja.legnica.pl" passHref rel="noopener noreferrer" target="_blank">
          <Image
            src="/img/herb_diecezji.png"
            alt="Logo"
            width={128}
            height={128}
            priority
          />
        </Link>
      </div>
      <div className="logo-top-right">
        <Link href="/">
        <Image
          src="/img/logo_mezczyzni_lubin_red.png"
          alt="Logo"
          width={256}
          height={256}
          priority
          />
          </Link>
      </div> 
    </div>
  );
}

export default Header