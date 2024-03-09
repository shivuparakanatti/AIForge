'use client'
import { Button } from "@/components/ui/button"
import { auth } from "@/firebase/firebase";
import { setUser } from "@/lib/features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link"
import { redirect,useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const landingPage=()=>{
   // const storageRef = ref(storage, 'some-child');
   const dispatch = useDispatch()
   const router = useRouter()
 

  

useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(setUser(user.email))
          localStorage.setItem("token",user.stsTokenManager.accessToken )
       
          router.push('/dashboard')

        } else {
          console.log('no user')
        }
      });
},[])
 
    
    
    return(
        <div>
            <h1>This is the landing page(un protected)</h1>
            <Link href={'/sign-in'}>
            <Button>Login</Button>
            </Link>
            <Link href={'/sign-up'}>
            <Button>Register</Button>
            </Link>
        </div>
    )
}

export default landingPage