import { Button } from "@/components/ui/button"
import Link from "next/link"

const landingPage=()=>{
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