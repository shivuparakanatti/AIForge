'use client'
import { Menu, User } from "lucide-react"
import { Button } from "./ui/button"
import MobileSidebar from "./MobileSidebar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { setUser } from "@/lib/features/userSlice"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import { auth } from "@/firebase/firebase"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { toast, useToast } from "./ui/use-toast"

const Navbar = ()=>{

    const dispatch = useDispatch()
    const router = useRouter()
    const toast = useToast()

    const [currentUser, setCurrentUser] = useState(null)


    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             
              dispatch(setUser(user.email))
              setCurrentUser(user.email)
              
            } else {
              router.push('/sign-in')
            }
          });
    },[])
    console.log(currentUser)
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
  <PopoverTrigger> <User size={36} /></PopoverTrigger>
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