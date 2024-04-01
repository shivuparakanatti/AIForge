import { NextResponse } from "next/server";

const { absoluteUrl } = require("@/lib/utils");
const { getAuth } = require("firebase/auth");


const settingsUrl = absoluteUrl("/settings")


const auth = getAuth();
const currentuser = auth.currentUser?.email;

export async function GET(){
try {
    if(!currentuser){
        return new NextResponse('Unauthorized',{status : 401})
    }

    if(currentuser){
        const stripeSession = await stripe.billingPortal.sessions.create({
            customer: currentuser,
            return_url: settingsUrl
        })
        return NextResponse.redirect(stripeSession.url)
    }

    const stripeSession = await stripe.checkout.sessions.create({
        customer: currentuser,
        return_url: settingsUrl,
        payment_method_type : ["card"],
        mode : "subscription",
        billing_address_collection : "auto",
        customer_email : currentuser.email,
    })
    return NextResponse.redirect(stripeSession.url)
    
} catch (error) {
    console.log(error)
    return new NextResponse('Internal error',{status: 500});
    
}
}