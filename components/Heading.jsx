import { cn } from "@/lib/utils"
import { MessageSquare } from "lucide-react"

const Heading = ({
icon:Icon,title,desc,iconColor,bgColor
})=>{
    return(
        <div className="flex items-center  px-4 lg:px-8 gap-4">
            <div className={cn('p-2 w-fit rounded-md',bgColor)}>
              
                <Icon className={cn('w-10 h-10',iconColor)}/>
              
            </div>
            <div>
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
        </div>
    )
}

export default Heading