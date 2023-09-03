import React from 'react'
import MenuItems from './MenuItems';
import Link from 'next/link';
import {AiFillHome} from "react-icons/ai";
import { BsFillInfoCircleFill} from "react-icons/bs";
export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>
        <div className=" flex">
                <MenuItems title="HOME" address="/" Icon={AiFillHome}/>
                <MenuItems title="ABOUT" address="/address" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className="">
          {/* <DarkModeSwitch/> */}
            <Link href="/">
              <h2 className='text-2xl'>
                <span className=' font-bold bg-amber-600 py-1 px-2 rounded-lg mr-1'>IMDb</span>
                <span className='text-xl hidden sm:inline'>Clone</span>
              </h2>
            </Link>
        </div>
    </div>
  )
}
