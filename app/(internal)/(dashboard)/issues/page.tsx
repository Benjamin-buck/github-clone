import Navbar from '@/components/Navbar'
import { signInLinks } from '@/constants/external'
import { closedIssues, issueFilters, openIssues, tabs } from '@/constants/issues'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="text-white">
      <Navbar pageTitle='Issues'/>
      <div className='w-[50%] flex mx-auto mt-10 gap-5'>
        <div className='flex border border-gray-600 rounded-md w-fit'>
          {tabs.map(({label, active}) => (
            <p className={`px-4 py-1 font-semibold cursor-pointer ${active && 'bg-blue-500 rounded-md'}`} key={label}>{label}</p>
          ))}
        </div>
        <input className='flex-1 bg-transparent border rounded-md border-gray-600 px-3' placeholder='is:open is:issue author:Benjamin-buck archived:false ' type="text" />
      </div>
      <div className='border border-gray-600 w-[50%] mx-auto mt-4 rounded-md'>
        <div className='flex bg-[#262C36] px-4 py-4 rounded-t-md justify-between'>
          <div className='flex gap-8'>
            <p className='font-bold text-gray-200'>{openIssues.value} {openIssues.label}</p>
            <p className='text-gray-500'>{closedIssues.value} {closedIssues.label}</p>
          </div>
          <div className='flex gap-5 text-gray-500 text-sm'>
            {issueFilters.map(({label}) => (
              <p key={label}>{label}</p>
            ))}
          </div>
        </div>
        <div className='h-[300px] flex items-center justify-center'>
          <div className='flex items-center flex-col'>
            <h3 className='text-2xl font-semibold'>No results matched your search.</h3>
            <p>You could search all of GitHub or try an advanced search.</p>
          </div>
        </div>
      </div>

      <div className='text-gray-500 text-sm gap-4 flex w-full justify-center mt-10'>
        {signInLinks.map(({label, href}) => (
          <Link href={href} key={label}>{label}</Link>
        ))}
      </div>
    </div>
  )
}

export default page