'use client'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./features/userSlice";
export const setUserDetails=()=>{
   

  const attempts = useSelector((state)=>{
    return state.user.attemptLeft
  })



  return attempts

}
