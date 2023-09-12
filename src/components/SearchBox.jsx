"use client";
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';

export default function SearchBox() {
  const [search, setSearch] =useState("");
  const router = useRouter;
  function handleSubmit(e) {
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search}`);
  }
  return (
   <form  className='flex max-w-6xl mx-auto justify-between items-center px-5'>

    <input value={search} onChange={(e) => setSearch(e.target.value)}
      type='text'
      placeholder='Search keywords'
      className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1'
      />
      <button 
       disabled={!search} type='submit'
       className='text-amber-600 disabled:test-gray-400'>Search</button>
   </form>
  );
}
