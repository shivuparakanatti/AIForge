'use client'
import LandingHero from "@/components/LandingHero";
import LandingNavbar from "@/components/LandingNavbar";
import { Button } from "@/components/ui/button"
import { setUser } from "@/lib/features/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
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
 
  async function getData(){
    const sfRef = db.collection(users).doc(currentUserEmail);
const collections = await sfRef.listCollections();
collections.forEach(collection => {
  console.log('Found subcollection with id:', collection.id);
});
  }
},[])

    
    
    return(
        <div className="h-full">
        
          <LandingNavbar/>
          <LandingHero/>
        </div>
    )
}

export default landingPage