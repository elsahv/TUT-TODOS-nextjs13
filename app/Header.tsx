import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    <header className="bg-blue-500 p-5">
         <Link href="/" className="px-2 py-1 bg-white text-blue-500 rounded-lg">Home</Link>
         </header>
  )
}

export default Header