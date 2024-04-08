'use client'
import { Menu, User } from "lucide-react"
import { Button } from "./ui/button"
import MobileSidebar from "./MobileSidebar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { setUser } from "@/lib/features/userSlice"
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { toast, useToast } from "./ui/use-toast"
import { auth } from "@/firebase/firebase"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const Navbar = ()=>{

    const dispatch = useDispatch()
    const router = useRouter()
    const toast = useToast()

    const [currentUser, setCurrentUser] = useState(null)

    onAuthStateChanged(auth, (user) => {
      if (user) {
  
        const uid = user.uid;
        setCurrentUser(user.email)
       // console.log(uid)
        // ...
      } else {
       
      }
    });

        
  
    const handleSignOut=()=>{
      signOut(auth).then(() => {
        router.push('/')

        toast({
        
          description: "Logged out succesfull",
          className:"my-10 mx-20 bg-green-500"
        })

      }).catch((error) => {
       console.log(error)
      });

    }
 
        
    return(
        <div className="flex items-center p-4">
            <MobileSidebar/>
            <div className="flex w-full justify-end">
            <Popover classNamemx-10>
  <PopoverTrigger> 
  <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  
  </PopoverTrigger>
  <PopoverContent className='w-full '>
    <h1>{currentUser}</h1>
    <p className="text-red-500 cursor-pointer pa-2" onClick={handleSignOut}>Sign out</p>
  </PopoverContent>
</Popover>
           
            </div>

        </div>
    )
}

export default Navbar