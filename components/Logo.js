import React from "react";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/pages/_app";
import Link from "next/link";

export default function Logo() {
  const { activeTheme } = useContext(ThemeContext);
  const logoColor = activeTheme === "light" ? "dark" : "light";
  return (
    <>
      <Link href="/">
        <Image
          src={`/images/logos/logo-${logoColor}.svg`}
          width={626 / 14}
          height={538 / 14}
          alt="Logo"
        />
      </Link>
    </>
  );
}
