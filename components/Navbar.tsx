import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
import { FaInbox } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { BsRecordCircle } from "react-icons/bs";
import { FaCaretDown } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";


const Navbar = () => {
  return (
    <nav className='border-b border-gray-700 py-4'>
      <div className='px-4 flex justify-between'>
        <div className='flex items-center gap-3'>
          <MdOutlineMenu className='text-[30px] border border-gray-700 rounded-md p-1' />
          <Link href='/'><FaGithub className='text-3xl' /></Link>
          <p className='font-semibold text-sm'>Dashboard</p>
        </div>
        <div className='flex items-center gap-3 text-gray-400'>
          <div className='border border-gray-600 flex gap-2 p-2 text-xl rounded-lg'>
            <IoMdAdd />
            <FaCaretDown />
          </div>
          <BsRecordCircle />
          <GoRepoForked />
          <FaInbox />
          <Image src='/profile.jpg' alt='Profile' width={35} height={35} className='rounded-full' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar