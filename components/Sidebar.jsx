'use client'
import Image from "next/image"
import logo from '../public/logo.png'
import { Check, Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSelector } from "react-redux";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { tools } from "@/constants";
const Sidebar = ()=>{

  const pathName = usePathname()
  const credits = useSelector(state=>{
    return state.user.attemptLeft
  })
  const router = useRouter()

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
        // {
        //   label: 'Video Generation',
        //   icon: VideoIcon,
        //   color: "text-orange-700",
        //   href: '/video',
        // },
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

      const handleUpgrade=()=>{
        router.push('/payment')
      }
    return (
        <div className="flex flex-col justify-between h-screen">
          <div>

            <div className="flex flex-row items-center space-x-4 px-2 md:px-8 py-4">
                <Image alt="logo" src={logo} className="w-8"/>
                <h1 className="text-2xl">AIForge</h1>
            </div>
            <div className="flex flex-col gap-2">
                {
                    routes.map(route=>{
                        return (
                            <div key={route.label} className={cn("hover:bg-gray-700 hover:rounded-md px-4 py-2 flex items-center",pathName==route.href ? 'bg-gray-700 rounded-md' : '')}>
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

            <div className="mb-24 md:mb-5 mx-1 md:mx-4 flex flex-col text-center justify-center items-center gap-2 text-lg bg-white/20 py-4">
              <h1>{credits}/5 Free Credits</h1>
              <Progress value={credits*20} className="w-[90%] " />
              
               <div> 

               <Dialog>
      <DialogTrigger asChild>
      <Button variant="premium" className='hover:shadow-md shadow-white'> Add Premium</Button>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center " >
            <div className="flex items-center gap-2 font-bold py-1/2">
              <div>Upgrade to Primium <Badge variant="premium" className='uppercase text-sm py-1'>Pro</Badge></div>
            </div>
          </DialogTitle>
          <DialogDescription className='text-center py-2 space-y-2 text-zink-900 text-md'>
            
            {
              tools.map(ele=>{
               return ( <Card key={ele.label} className='p-3 border-black/5 flex items-center justify-between'>
                  <div className="flex flex-row items-center jusify-start gap-4 ">
                    <div className={cn("p-2 rounded-md w-fitt" , ele.bgColor)}>
                      <ele.icon className={cn("w-6 h-6",ele.color)}/>
                    </div>
                    <div className="font-semibold test-sm">
                      {ele.label}
                    </div>
                  </div>
                  <Check className="text-primary w-5 h-5"/>
                </Card>)
              })
            }
            
          </DialogDescription>
        </DialogHeader>
          
        <DialogFooter>
          <Button size='lg' variant="premium" className='w-full' onClick={handleUpgrade}>Upgrade <Zap className="w-4 h-4 ml-2 fill-white"/></Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>


              </div>
            
            </div>
           
        </div>
    )
}

export default Sidebar