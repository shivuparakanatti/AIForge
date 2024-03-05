"use client"
import Heading from "@/components/Heading"
import { Image, MessageSquare } from "lucide-react"
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
import { Skeleton } from "@/components/ui/skeleton"
import { amountOptions, formSchema } from "./constant"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"




const ImageGeneratorPage=()=>{
    //const router = useRouter()
    const [chatLog,setChatLog] = useState([])
    const [loading,setLoading] = useState(false)

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          prompt:''
        },
      });

      const isLoading = form.formState.isSubmitting
    
console.log(isLoading)
    const onSubmit=async(value)=>{
        console.log('value')
        setLoading(true)
        setChatLog((prevChatLog) => [...prevChatLog, { type: 'user', message: value.prompt }])

       const data =await SendMessage(value.prompt)
       //console.log(data)
       setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: data.content }])

       form.reset()
       window.scrollTo(0, document.documentElement.scrollHeight);
       setLoading(false)
    }
    
    
    return(
        <div>            

           
            <Heading 
            title= "Image Generation"
            desc = 'Turn your prompt to an Image'
            icon = {Image}
            iconColor = 'text-red-500'
            bgColor = 'bg-red-500/10'
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
                                    <Input placeholder="A man riding a horse in desert" className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent py-4' {...field} disabled={isLoading} />
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
                    
                    <div className="text-black">

                    {
                        chatLog && chatLog.map(ele=>{
                            return(
                                <div className=" flex flex-col mx-4 my-4">

                                <h1 className={`${ele.type == 'user' ? 'flex items-end justify-end font-bold text-xl md:text-2xl mr-5' : 'items-start text-lg text-black  mb-2 lg:w-[70%]' } w-[70%]]`}>{ele.message}</h1>
                               
                                
                                </div>

                            )
                        })
                    }
                     {
                                    loading && <div className="space-y-2">
                                    <Skeleton className="h-4 w-[300px]" />
                                    <Skeleton className="h-4 w-[300px]" />
                                    <Skeleton className="h-4 w-[250px]" />
                                </div>
                                }

                    </div>


                </div>
                
            </div>
        </div>
    )
}

export default ImageGeneratorPage