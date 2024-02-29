"use client";

import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import Sidebar from "./Sidebar"
import { useEffect, useState } from "react";

const MobileSidebar=()=>{
    const [isMounted,setIsMounted] = useState(false)
    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }
    return (
        <Sheet>

        <SheetTrigger>

      
           <div className="md:hidden bg-slate-900 text-white px-4 py-1 rounded-md hover:bg-slate-700">

                <Menu />
           </div>
       
        </SheetTrigger>
        <SheetContent side='left' className='bg-gray-900 text-white'>
            <Sidebar/>
        </SheetContent>

        </Sheet>

    )
}

export default MobileSidebar