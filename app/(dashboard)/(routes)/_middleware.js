import { NextResponse } from 'next/server'
 

export async function middleware(req, ev) {
    // req: contains reqcomuest information
    console.log('gsfgfs')

    if (!isAuthenticated()) {
        return NextResponse.redirect('/login');
    }
    return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/*',
}