"use client";

import Link from "next/link";
import IconLogo from "../icons/IconLogo";
import IconMenu from "../icons/IconMenu";
import IconSearch from "../icons/IconSearch";
import IconCart from "../icons/IconCart";
import IconUser from "../icons/IconUser";
import { useState } from "react";
import Image from "next/image";
import Overlay from "./Overlay";
import { motion } from "motion/react"
import { useFlyCart } from "@/context/FlyCartContext";

function Navbar() {
  const { cartRef, flyData, setFlyData } = useFlyCart();
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <header className="bg-primary-color relative z-50 px-8 py-4 rounded-xl text-white">
        <div className="w-full flex items-center justify-between">
          <button className="cursor-pointer">
            <IconMenu />
          </button>

          <h1 className="flex items-end gap-1 text-lg font-semibold">
            <IconLogo />
            Commerce
          </h1>

          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for products"
              className="w-96 px-3 py-1.5 text-sm bg-white text-black rounded-xl"
              onFocus={() => setOpen(true)}
              onBlur={() => setOpen(false)}
            />
            <span className="absolute z-50 right-2">
              <IconSearch />
            </span>

            {open && <SearchContentBox />}
          </div>

          <div className="flex items-center gap-5">
            <p className="text-sm">Order now and get it within 15 mint!</p>
            <Link
              ref={cartRef as React.RefObject<HTMLAnchorElement>}
              href={"/cart"}
              className="text-primary-color bg-white rounded-full p-1.5 active:scale-95 duration-200"
            >
              <IconCart />
            </Link>
            <Link
              href={"/profile"}
              className="border border-white/25 hover:border-white/50 duration-100 rounded-full p-1.5"
            >
              <IconUser />
            </Link>
          </div>
        </div>
      </header>
      {open && <Overlay />}
       {/* Flying Image Animation */}
       {flyData && (
        <motion.img
          src={flyData.src}
          initial={{
            position: "fixed",
            top: flyData?.start?.top,
            left: flyData?.start?.left,
            width: flyData?.start?.width,
            height: flyData?.start?.height,
          }}
          animate={{
            top: flyData?.end?.top,
            left: flyData?.end?.left,
            width: 20,
            height: 20,
            opacity: 1,
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onAnimationComplete={() => setFlyData(null)}
          style={{ zIndex: 999 }}
        />
      )}
    </>
  );
}

export default Navbar;

function SearchContentBox() {
  return (
    <motion.div 
     initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      layout
    className="absolute z-50 top-10 left-0 w-[425] bg-white rounded-lg shadow-md p-3 space-y-5">
      <motion.div transition={{ duration: 0.25 }} layout>
        <h1 className="text-black text-xs font-semibold">
          Recommended searches
        </h1>
        <div className="grid grid-cols-2 gap-3 mt-3">
        {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-gray-card-color rounded-lg flex gap-3 items-center p-2"
            >
              <Image
                src={`/category/category${item}.png`}
                alt="product"
                width={100}
                height={100}
                className="w-12"
              />
              <div className="text-primary-color text-sm font-semibold">
                <h1>Beetroot</h1>
                <p>17.00</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div  transition={{ duration: 0.25 }} layout>
        <h1 className="text-black text-xs font-semibold">Popular searches</h1>
        <div className="grid grid-cols-2 gap-3 mt-3">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="bg-gray-card-color rounded-lg flex gap-3 items-center p-2"
            >
              <Image
                src={"/category/category1.png"}
                alt="product"
                width={100}
                height={100}
                className="w-12"
              />
              <div className="text-primary-color text-sm font-semibold">
                <h1>Beetroot</h1>
                <p>17.00</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
