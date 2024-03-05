import axios from "axios";
import { useState } from "react";
import { Configuration, OpenAIApi ,openai} from "openai";

export const SendMessage = async(message) => {
  
  
    // [messagedata,setMessageData] = useState()
    const url = 'https://api.openai.com/v1/images/generations';

    const headers={
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_OPEN_API_KEY}`
    }

    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": message }]
    };
    const requestData = {
      prompt: prompt,
      n: 2,
      size: '256x256', // Set the desired image size here
   };

    //setIsLoading(true);

    const messagedata = axios.post(url, requestData,{headers : headers}).then((response) => {
      return response

    
   // setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content }])
   // setIsLoading(false);
  }).catch((error) => {
    //setIsLoading(false);
    console.log(error);
  })

 // return messagedata
 console.log(messagedata)



    //return image_url
  }