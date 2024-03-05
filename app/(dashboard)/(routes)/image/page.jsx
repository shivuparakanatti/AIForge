// "use client"
// import Heading from "@/components/Heading"
// import { Image, MessageSquare } from "lucide-react"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { Button } from "@/components/ui/button"
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormMessage,
// } from "@/components/ui/form"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Input } from "@/components/ui/input"
// import { useState } from "react"
// import  { SendMessage,  } from "@/app/api/image/route"
// import { Skeleton } from "@/components/ui/skeleton"
// import { amountOptions, formSchema, resolutionOptions } from "./constant"
// import axios from "axios"




// const ConversationPage=()=>{
//     //const router = useRouter()
//     const [chatLog,setChatLog] = useState([])
//     const [loading,setLoading] = useState(false)

//     const form = useForm({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             prompt: "",
//             amount: "1",
//             resolution: "512x512"
//         },
//       });

//       const isLoading = form.formState.isSubmitting
    

    
//       const onSubmit = async (values) => {
//         try {
//           //setPhotos([]);
    
//          // const response = await axios.post('/api/image', values);
    
//          // const urls = response.data.map((image) => image.url);
//          // console.log(urls)
    
//          // setPhotos(urls);
//         } catch (error) {
//           if (error?.response?.status === 403) {
//             proModal.onOpen();
//           } else {
//            // toast.error("Something went wrong.");
//            console.log(error)
//           }
//         } finally {
//           //router.refresh();
//         }
//       }
    
    
//     return(
//         <div>            

           
//             <Heading 
//              title= "Image Generation"
//              desc = 'Turn your prompt to an Image'
//              icon = {Image}
//              iconColor = 'text-red-500'
//              bgColor = 'bg-red-500/10'
//             />

//             <div className="px-4 lg-px-8 py-4 ">
//                 <div>

//             <Form {...form}>
//                 <form onSubmit={form.handleSubmit(onSubmit)} className="w-full border rounded-lg p-4 px-3 md:px-6 focus-within:shadow-sm grid lg:grid-flow-col grid-col-12 gap-2">
                    
//                     <FormField
//                         control={form.control}
//                         name="prompt"
//                         render={({ field }) => (
//                             <FormItem className='col-span-12 lg:col-span-10'>
//                                 <FormControl className='m-0 p-0'>
//                                     <Input placeholder="A man riding a horse in desert" className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent py-4' {...field} disabled={isLoading} />
//                                 </FormControl>
                               
//                                 <FormMessage />
//                             </FormItem>
                            
//                         )}
//                     />
//                      <FormField
//               control={form.control}
//               name="amount"
//               render={({ field }) => (
//                 <FormItem className="col-span-12 lg:col-span-2">
//                   <Select 
//                     disabled={isLoading} 
//                     onValueChange={field.onChange} 
//                     value={field.value} 
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue defaultValue={field.value} />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       {amountOptions.map((option) => (
//                         <SelectItem 
//                           key={option.value} 
//                           value={option.value}
//                         >
//                           {option.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </FormItem>
//               )}
//             />
                   
//                      <FormField
//               control={form.control}
//               name="resolution"
//               render={({ field }) => (
//                 <FormItem className="col-span-12 lg:col-span-2">
//                   <Select 
//                     disabled={isLoading} 
//                     onValueChange={field.onChange} 
//                     value={field.value} 
//                     defaultValue={field.value}
//                   >
//                     <FormControl>
//                       <SelectTrigger>
//                         <SelectValue defaultValue={field.value} />
//                       </SelectTrigger>
//                     </FormControl>
//                     <SelectContent>
//                       {resolutionOptions.map((option) => (
//                         <SelectItem 
//                           key={option.value} 
//                           value={option.value}
//                         >
//                           {option.label}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </FormItem>
//               )}
//             />
                   
                    
//                     <Button type="submit" className='col-span-12 lg:col-span-1 px-4 w-full'>Generate</Button>
//                 </form>
//             </Form>
//             </div>
//                 <div className="space-y-4 mt-4">
//                     {/* <div>
//                         {
//                             chatLog.length==0 && <image src='https://user-images.githubusercontent.com/925062/41967273-88b42470-7a01-11e8-8328-51e4f5b894f1.png' />
//                         }
//                     </div> */}
//                     <div className="text-black">

//                     {/* {
//                         chatLog && chatLog.map(ele=>{
//                             return(
//                                 <div className=" flex flex-col mx-4 my-4">

//                                 <h1 className={`${ele.type == 'user' ? 'flex items-end justify-end font-bold text-xl md:text-2xl mr-5' : 'items-start text-lg text-black  mb-2 lg:w-[70%]' } w-[70%]]`}>{ele.message}</h1>
                               
                                
//                                 </div>

//                             )
//                         })
//                     } */}
//                      {
//                                     loading && <div className="space-y-2">
//                                     <Skeleton className="h-4 w-[300px]" />
//                                     <Skeleton className="h-4 w-[300px]" />
//                                     <Skeleton className="h-4 w-[250px]" />
//                                 </div>
//                                 }

//                     </div>


//                 </div>
                
//             </div>
//         </div>
//     )
// }

// export default ConversationPage