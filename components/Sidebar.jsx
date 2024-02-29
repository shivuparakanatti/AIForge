'use client'
import Image from "next/image"
import logo from '../public/logo.png'
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const Sidebar = ()=>{

  const pathName = usePathname()
  console.log(pathName)

    const routes = [

        {
          label: 'Dashboard',
          icon: LayoutDashboard,
          href: '/dashboard',
          color: "text-sky-500"
        },
        {
          label: 'Conversation',
          icon: MessageSquare,
          href: '/conversation',
          color: "text-violet-500",
        },
        {
          label: 'Image Generation',
          icon: ImageIcon,
          color: "text-pink-700",
          href: '/image',
        },
        {
          label: 'Video Generation',
          icon: VideoIcon,
          color: "text-orange-700",
          href: '/video',
        },
        {
          label: 'Music Generation',
          icon: Music,
          color: "text-emerald-500",
          href: '/music',
        },
        {
          label: 'Code Generation',
          icon: Code,
          color: "text-green-700",
          href: '/code',
        },
        {
          label: 'Settings',
          icon: Settings,
          href: '/settings',
        },
      ];
    return (
        <div >
            <div className="flex flex-row items-center space-x-4 px-2 md:px-8 py-4">
                <Image alt="logo" src={logo} className="w-8"/>
                <h1 className="text-2xl">AIForge</h1>
            </div>
            <div className="flex flex-col gap-2">
                {
                    routes.map(route=>{
                        return (
                            <div className={cn("hover:bg-gray-700 hover:rounded-md px-4 py-2 flex items-center",pathName==route.href ? 'bg-gray-700 rounded-md' : '')}>
                                <Link href={route.href} key={route.label} className="flex  space-x-2 ">
                                <route.icon className={`${route.color}`}/>
                                <h1>{route.label}</h1>
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Sidebar