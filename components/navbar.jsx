import { Menu, User } from "lucide-react"
import { Button } from "./ui/button"
import MobileSidebar from "./MobileSidebar"

const Navbar = ()=>{
    return(
        <div className="flex items-center p-4">
            <MobileSidebar/>
            <div className="flex w-full justify-end">
            <User size={36} />
            </div>

        </div>
    )
}

export default Navbar