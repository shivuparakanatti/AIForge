import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/navbar"
import { LiveChatLoaderProvider } from 'react-live-chat-loader'

const DashboardLayout=({children})=>{
    return (

        <div className="h-full relative">
           <div className="hidden md:flex md:w-72 bg-gray-900 h-full md:flex-col md:fixed text-white">
            <Sidebar/>
           </div>
           <main className="md:pl-72">
            <Navbar/>

            {
                children
            }
           </main>
        </div>

    )
}

export default DashboardLayout