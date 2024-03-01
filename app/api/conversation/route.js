import { NextResponse } from 'next/server';
import {Configuration, OpenAIApi} from 'openai'
const configuration = new Configuration({
    apiKey : process.env.OPEN_API_KEY
})

console.log(process.env.OPEN_API_KEY)



const openai = new OpenAIApi(configuration);

export async function POST(
    req 
    ){
        try {
            const body = await req.json();
            const {messages} = body;
            if(!messages){
                return new NextResponse("messages are required" ,{status:400})
            }
        
            const response = await openai.createChatCompletion({
                model: "gpt-3.5",
                messages
            })
        
            return NextResponse.json(response.data.choices[0].message)
        } catch (error) {
            
        }
    }

