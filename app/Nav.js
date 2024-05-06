import React from 'react'
import Link from 'next/link'
import "../app/Componenets/MediaQ.css"
import NS from "./NS.png"
import Image from 'next/image'


export default function Nav() {
  return (
    <nav class="bg-black-900 shadow-lg" style={{backgroundColor:'black'}} >
  <div class="max-w-7xl mx-auto px-4 py-2">
    <div class="flex justify-between items-center">
      
      <div class="flex items-center">
      <Link href="/">
      <Image
      
  src={NS}
  width={30}
  
  alt="asdas"
  id="logo" />
  </Link> 
       
        <ul class="flex space-x-4 ml-4" style={{fontFamily:'teko'}}>
        <li><Link href="/Work" class="text-white hover:text-gray-200 hover:underline text-lg">Work</Link></li>
          <li><Link href="/About" class="text-white hover:text-gray-200 hover:underline text-lg">About</Link></li>
          
          <li><Link href="/Thoughts" class="text-white hover:text-gray-200 hover:underline text-lg">Thoughts</Link></li>
          <li><Link href="/Thoughts" class="text-white hover:text-gray-200 hover:underline text-lg">Archive</Link></li>

        

        </ul>
      </div>
      
      <div>
       
      </div>
    </div>
  </div>
</nav>

      
  )
}
