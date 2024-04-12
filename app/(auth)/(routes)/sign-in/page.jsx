"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useToast } from "@/components/ui/use-toast";
import { setUser } from "@/lib/features/userSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Please Enter a Email.",
    })
    .email("This is not a valid Email ID"),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
});

const SignIn = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (value) => {
    signInWithEmailAndPassword(auth, value.email, value.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          console.log(user);
          router.push('/dashboard')

         // router.push("/dashboard");
        }

        toast({
          description: "Logged in succesfull",
          className: "my-10 mx-20 bg-green-500",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const regex = /\((.*?)\)/;
        const match = errorMessage.match(regex);
        toast({
          variant: "destructive",
          description: match[1],
          className: "my-10 mx-20",
        });
      });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-72 shadow-lg px-4 md:px-8 py-4 "
        >
          <h1 className="flex items-center justify-center text-3xl text-muted-foreground">
            Sign-In
          </h1>

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
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className={cn("w-full ")}>
            Submit
          </Button>
          <div className="my-2">

          <span className="text-sm text-muted-foreground ">Dont have an account? <a href="/sign-up" className="font-bold text-blue-500">Register</a></span>
          </div>

        </form>
      </Form>
    </div>
  );
};

export default SignIn;
