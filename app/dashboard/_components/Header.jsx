"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  const router = useRouter();
  return (
    <div className="flex p-4 items-center justify-between bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white shadow-sm">
      <Image src={"/logo.svg"} width={160} height={100} alt={"logo"} />
      <ul className="hidden md:flex gap-6">
        <li
          className="hover:scale-105 hover:font-bold transition-all cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </li>
        <li
          className={`hover:scale-105 cursor-pointer hover:font-bold transition-all
            ${path == "/dashboard" && "text-teal-400 font-bold"}
            `}
          onClick={() => {
            router.push("/dashboard");
          }}
        >
          Dashboard
        </li>
        <li
          className={`hover:scale-105 cursor-pointer hover:font-bold transition-all
            ${path == "/dashboard/upgrade" && "text-teal-400 font-bold"}
            `}
          onClick={() => {
            router.push("/");
          }}
        >
          Upgrade
        </li>
        <li
          className={`hover:scale-105 cursor-pointer hover:font-bold transition-all
            ${path == "/dashboard/questions" && "text-teal-400 font-bold"}
            `}
          onClick={() => {
            router.push("/");
          }}
        >
          Questions
        </li>
        <li
          className={`hover:scale-105 cursor-pointer hover:font-bold transition-all
            ${path == "/dashboard/how" && "text-teal-400 font-bold"}
            `}
          onClick={() => {
            router.push("/");
          }}
        >
          How it works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
