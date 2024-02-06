'use client'
import React, { useState } from "react";
import { CiHome } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdOutlineExplore } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiMovieLine } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import { Button } from "@/components/ui/button"
import { IoSettingsOutline } from "react-icons/io5"
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import { FaRegKeyboard } from "react-icons/fa";
import { signOut } from 'firebase/auth'
import {auth} from '@/firebase'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export const SideBarLink = [
  {
    href: "/",
    key: "home",
    label: "Home",
    icon: <CiHome />,
  },
  {
    href: "/search",
    key: "search",
    label: "Search",
    icon: <CiSearch />,
  },
  {
    href: "/explore",
    key: "explore",
    label: "Explore",
    icon: <MdOutlineExplore />,
  },
  {
    href: "/reels",
    key: "reels",
    label: "Reels",
    icon: <RiMovieLine />,
  },
  {
    href: "/messages",
    key: "messages",
    label: "Messages",
    icon: <BiMessageRoundedDetail />,
  },
  {
    href: "/notifications",
    key: "notifications",
    label: "Notifications",
    icon: <IoMdNotificationsOutline />,
  },
  {
    href: "/create",
    key: "create",
    label: "Create",
    icon: <IoCreateOutline />,
  },
  {
    href: "/profile",
    key: "profile",
    label: "Profile",
    icon: <CgProfile />,
  },
];

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState<string | null>(null);

    const handleLinkClick = (key : string) => {
      setActiveLink(key);
    };
    
  return (
    <div className=" hidden md:block border-2 bg-slate-400 w-[320px] h-screen overflow-y-auto">
      <div className="flex flex-rol gap-3 p-5 align-middle text-center">
        <h1 className="font-bold  text-3xl">Instagram</h1>
        <Image
          className="rounded-3xl"
          src={"/instagram.png"}
          alt="logo"
          height={54}
          width={54}
        />
      </div>
      <div>
        <ul className="  gap-5 text-white ">
          {SideBarLink.map((link) => (
            <div key={link.key} className={`flex  text-center  hover:bg-black align-middle  ${activeLink === link.key ? "bg-blue-500" : ""}`}>
              <p 
              onClick={() => handleLinkClick(link.key)}
              className="pt-4 ml-5 text-xl text-rose-500 hover:font-bold cursor-pointer">
                {link.icon}
              </p>

              <Link
                className={` hover:font-bold transition-all flex  p-3.5 cursor-pointer`}
                href={link.href}
                onClick={() => handleLinkClick(link.key)}
              >
                {link.label}
              </Link>
            </div>
          ))}
        </ul>

      </div>
      <div className="flex">
        {/* <CgDetailsMore className="  text-xl mt-4 ml-5 text-rose-500 hover:font-bold cursor-pointer"/>
        <p className="text-white ml-3.5 mt-3 pb-5 hover:font-bold cursor-pointer">More</p> */}
        <div className="ml-5 mt-1">
        <DropdownMenu  >
      <DropdownMenuTrigger asChild>
        <Button variant="outline">More</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
          <Link href={'/profile'}>Profile</Link> 
            <DropdownMenuShortcut><CgProfile/></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut><FaMoneyBillTransfer/></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut><IoSettingsOutline/></DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut><FaRegKeyboard/></DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
         
        </DropdownMenuGroup>
        
        <DropdownMenuItem onClick={()=>signOut(auth)}>
          Log out
          <DropdownMenuShortcut><IoLogOutOutline/></DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
