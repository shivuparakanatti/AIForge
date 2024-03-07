import { useEffect, useState } from "react"
import OpenAI from "openai"







 
    const GetImages = async(values)=>{
        const {prompt,amount,resolution} = values
        console.log(values)

        const openai = new OpenAI({
            apiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY,
            dangerouslyAllowBrowser: true
           })
        console.log(prompt,amount,resolution)
      
       
                const response = await openai.images.generate({
                    model : 'dall-e-2',
                    prompt : prompt,
                    n:Number(amount),
                    size:resolution
                })
            
               
                return response.data
            
    }
    
    
            
       
   
       export default GetImages

