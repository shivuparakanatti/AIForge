"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { auth } from "@/firebase/firebase";
import { toast, useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    email: z.string().min(1, {
        message: "Please Enter a Email.",
    }).email('This is not a valid Email ID'),
    password: z.string().min(5, {
        message: "Password must be at least 5 characters.",
    }),
    confirmpassword: z.string().min(5, {
        message: "Username must be at least 2 characters.",
    }),
}).refine((data) => data.password === data.confirmpassword, {
    message: "Passwords don't match",
    path: ["confirmpassword"],
});

const SignUp = () => {
    const {toast } = useToast()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          confirmpassword: "",
          password: "",
          username: "",
        },
      });
    

    const onSubmit=(value)=>{
        console.log(value)


createUserWithEmailAndPassword(auth, value.email, value.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    toast({
        
        description: "User account created",
        className:"my-10 mx-20 "
      })

   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
    }
   
    return (
        <div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-72 shadow-lg px-8 py-4">
                <h1 className="flex items-center justify-center text-3xl text-muted-foreground">Sign-up</h1>
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="User Name" {...field} />
                                </FormControl>
                               
                                <FormMessage />
                            </FormItem>
                            
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email ID</FormLabel>
                                <FormControl>
                                    <Input placeholder="User Email" {...field} />
                                </FormControl>
                               
                                <FormMessage />
                            </FormItem>
                            
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type='password' placeholder="Password" {...field} />
                                </FormControl>
                               
                                <FormMessage />
                            </FormItem>
                            
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmpassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="Confirm Password " {...field} />
                                </FormControl>
                               
                                <FormMessage />
                            </FormItem>
                            
                        )}
                    />
                    <Button type="submit" className='w-full'>Submit</Button>
                </form>
            </Form>

        </div>
    )
}

export default SignUp