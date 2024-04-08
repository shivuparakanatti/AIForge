import axios from "axios";

export const SendMessage = (message) => {
    // [messagedata,setMessageData] = useState()
    const url = 'https://api.openai.com/v1/chat/completions';
    const customPrompt = 'You are a code generator , you must reply in codes only, use respective code comments for description'

    const headers={
        'Content-type' : 'application/json',
        'Authorization' : `Bearer ${process.env.NEXT_PUBLIC_OPEN_API_KEY}`
    }

    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": `${customPrompt}. ${message }` }]
    };

    //setIsLoading(true);

    const messagedata = axios.post(url, data,{headers : headers}).then((response) => {
        return response.data.choices[0].message;

      
     // setChatLog((prevChatLog) => [...prevChatLog, { type: 'bot', message: response.data.choices[0].message.content }])
     // setIsLoading(false);
    }).catch((error) => {
      //setIsLoading(false);
      console.log(error);
    })

    return messagedata
  }