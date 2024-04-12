"use client"
import Heading from "@/components/Heading"
import { Code, MessageSquare } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import ReactMarkdown from 'react-markdown'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import  { SendMessage,  } from "@/app/api/code/route"
import ReactLoading from 'react-loading';import { Skeleton } from "@/components/ui/skeleton"
import { setAttempt } from "@/lib/features/userSlice"
import { useDispatch, useSelector } from "react-redux"
const formSchema = z.object({
    
    
    prompt: z.string().min(1, {
        message: "Please Enter a prompt.",
    }),
   
})



const CodePage=()=>{
    //const router = useRouter()
    const [chatLog,setChatLog] = useState([])
    const [loading,setLoading] = useState(false)
    const credits = useSelector(state=>{
        return state.user.attemptLeft
    })
   
    const dispatch = useDispatch()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          prompt:''
        },
      });

      const isLoading = form.formState.isSubmitting
    

    const onSubmit=async(value)=>{
        dispatch(setAttempt())
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
            title= "Code Generator"
            desc = 'Generate a code using descriptive text'
            icon = {Code}
            iconColor = 'text-green-500'
            bgColor = 'bg-green-500/10'
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
                                    <Input placeholder="Simple toggle button using react hooks?" className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent py-4' {...field} disabled={isLoading} />
                                </FormControl>
                               
                                <FormMessage />
                            </FormItem>
                            
                        )}
                    />
                   
                    
                    <Button type="submit" className='col-span-12 lg:col-span-1 px-4 w-full' disabled={credits<=0} >Generate</Button>
                </form>
            </Form>
            </div>
                <div className="space-y-4 mt-4">
                    {/* <div>
                        {
                            chatLog.length==0 && <image src='https://user-images.githubusercontent.com/925062/41967273-88b42470-7a01-11e8-8328-51e4f5b894f1.png' />
                        }
                    </div> */}
                    <div className="text-black">

                    {
                        chatLog && chatLog.map(ele=>{
                            return(
                                <div className=" flex flex-col mx-4 my-4">

                                <ReactMarkdown className={`${ele.type == 'user' ? 'flex items-end justify-end font-bold text-sm md:text-2xl mr-5' : 'items-start text-sm text-black  mb-2 lg:w-[70%]' } w-[70%]]`}
                                
                                components={{
                                    pre: ({ node, ...props }) => (
                                      <div className="overflow-auto w-full my-2 bg-black text-white p-2 rounded-lg">
                                        <pre {...props} />
                                      </div>
                                    ),
                                    code: ({ node, ...props }) => (
                                      <code className="bg-black rounded-lg p-2" {...props} />
                                    )
                                  }}
                                >
                                    {ele.message || ''}
                                    </ReactMarkdown>
                               
                                
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

export default CodePage