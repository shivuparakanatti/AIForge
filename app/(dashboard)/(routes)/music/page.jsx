"use client";
import Heading from "@/components/Heading";
import { MessageSquare, Music, Smile } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { SendMessage } from "@/app/api/conversation/route";
import ReactLoading from "react-loading";
import { Skeleton } from "@/components/ui/skeleton";
import Replicate from "replicate";
const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Please Enter a prompt.",
  }),
});

const ConversationPage = () => {
  //const router = useRouter()
  const [chatLog, setChatLog] = useState(null);
  

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;



  const onSubmit = async (value) => {
    setChatLog(`We are working on this feature, We will get back soon`)
  };

  return (
    <div>
      <Heading
        title="Music Generator"
        desc="Convert any prompt to an audio"
        icon={Music}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />

      <div className="px-4 lg-px-8 py-4 ">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full border rounded-lg p-4 px-3 md:px-6 focus-within:shadow-sm grid lg:grid-flow-col grid-col-12 gap-2"
            >
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        placeholder="How do I calculate the radius of circle ?"
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent py-4"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="col-span-12 lg:col-span-1 px-4 w-full"
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
         
          <div className="text-black">
            {chatLog && 
            <div className="flex">

                <h1 className="flex items-center justify-center mx-4 my-8 text-2xl font-serif">{chatLog}<span></span></h1>
                
            </div>
                }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
