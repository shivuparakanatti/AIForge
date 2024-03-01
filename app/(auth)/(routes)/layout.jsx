import { Toaster } from "@/components/ui/toaster"

const AuthLayout = ({children})=>{
    return (
        <div className="flex items-center justify-center h-screen">
            {children}
            <div className="mx-10">

            <Toaster className='m-10'/>
            </div>
        </div>
    )
}

export default AuthLayout