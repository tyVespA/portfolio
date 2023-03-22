import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <p>Projects</p>
      <Link href="/">Back home</Link>
    </div>
  );
}
