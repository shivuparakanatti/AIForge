"use client"
import Heading from "@/components/Heading"
import { MessageSquare, Music } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import  { SendMessage,  } from "@/app/api/conversation/route"
import axios from "axios"
const formSchema = z.object({
    
    
    prompt: z.string().min(1, {
        message: "Please Enter a prompt.",
    }),
   
})



const MusicPage=()=>{
    //const router = useRouter()
    const [music,setMusic] = useState()
    const [loading,setLoading] = useState(false)

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          prompt:''
        },
      });

      const isLoading = form.formState.isSubmitting
    

    const onSubmit=async(value)=>{
        console.log(value)
        setLoading(true)
       
      const response =await axios.post('/api/music',value);
      setMusic(response.data.audio);
       form.reset()
       window.scrollTo(0, document.documentElement.scrollHeight);
       setLoading(false)
    }
    
    
    return(
        <div>            

           
            <Heading 
            title= "Music Generation"
            desc = 'Turn your prompt to Music'
            icon = {Music}
            iconColor = 'text-emerald-500'
            bgColor = 'bg-emerald-500/10'
            />

            <div className="px-4 lg-px-8 py-4 ">
                <div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full border rounded-lg p-4 px-3 md:px-6 focus-within:shadow-sm grid lg:grid-flow-col grid-col-12 gap-2">
                    
                    <FormField
                        control={form.control}
                        name="prompt"
                        render={({ field }) => (
                            <FormItem className='col-span-12 lg:col-span-10'>
                                <FormControl className='m-0 p-0'>
                                    <Input placeholder="Piano solo" className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent py-4' {...field} disabled={isLoading} />
                                </FormControl>
                               
                                <FormMessage />
                            </FormItem>
                            
                        )}
                    />
                   
                    
                    <Button type="submit" className='col-span-12 lg:col-span-1 px-4 w-full'>Generate</Button>
                </form>
            </Form>
            </div>
                <div className="space-y-4 mt-4">
                   

                {
                    music && (
                        <audio controls>
                            <source src={music} />
                          

                        </audio>
                    )
                }
                {
                    isLoading && (
                        <h1>Loading...</h1>
                    )
                }


                </div>
                
            </div>
        </div>
    )
}

export default MusicPage