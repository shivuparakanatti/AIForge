
import { NextResponse } from 'next/server'
import firebase from 'firebase/app';

export async function middleware(req, ev) {
 // const token = localStorage.getItem('token')



    return NextResponse.next();
  
}
       
   


 
  export const config = {
    matcher : ['/dashboard','/image',]
  }
