'use client'
import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { auth } from "@/firebase/firebase"

const font = Montserrat({
    weight:'600',
    subsets : ['latin']
})
const LandingNavbar = ()=>{
    const [user,setUser]= useState(null)

    onAuthStateChanged(auth, (user) => {
        if (user) {
    
          const uid = user.uid;
          setUser(user.email)
          // ...
        } else {
         
        }
      });
       
      return(  <nav className="p-4 bg-transparent flex justify-between items-center">
        <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8 mr-4">
                <Image fill src="/logo.png" alt="logo" />
            </div>
            <h1 className={cn("text-2xl font-bold text-white",font.className)}>AIForge</h1>
        </Link>
        <div>

            <Link href={user ? '/dashboard' : '/sign-in'}>
                <Button variant='outline'className='rounded-full' >Get started</Button>
            </Link>
        </div>

    </nav>
  )
}

export default LandingNavbar