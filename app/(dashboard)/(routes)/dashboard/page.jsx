'use client'
import { Card } from "@/components/ui/card"
import { tools } from "@/constants"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

const dashboardPage = ()=>{
    const router = useRouter()
    return (
        <div>
            <div className=" mb-4 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">Explore the power of AI</h1>
                <p className="text-muted-foreground">Chat with smartest AI - Experience the power of AI</p>
            </div>
            <div className="px-4 md:px-20 lg:px-32">
                {
                    tools.map(tool=>{
                        return (
                            <Card className='p-4 border-black/5 hover:shadow-md cursor-pointer my-2 flex items-center justify-between'
                            onClick={()=>{
                                router.push(tool.href)
                            }}
                            >
                                <div className="flex items-center justify-center gap-4">
                                    <div className={cn("p-2 rounded-md w-fit",tool.bgColor)}>

                                    <tool.icon className={cn("w-8 h-8",tool.color)}/>
                                    </div>
                                    <h1 className="font-semibold">{tool.label}</h1>
                                </div>
                                <div>
                                    <ArrowRight className="mx-4 w-5 h-5"/>
                                </div>
                            </Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default dashboardPage