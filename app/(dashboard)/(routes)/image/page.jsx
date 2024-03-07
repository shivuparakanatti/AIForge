"use client";
import Heading from "@/components/Heading";
import { ImageIcon, MessageSquare } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import GetImages, { SendMessage } from "@/app/api/image/route";
import { Skeleton } from "@/components/ui/skeleton";
import { amountOptions, formSchema, resolutionOptions } from "./constant";
const ConversationPage = () => {
  //const router = useRouter()
  const [image, setImage] = useState(null);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1 photo",
      resolution: "512x512",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values) => {
    setImage(null);
    const allImages = await GetImages(values);
    setImage(allImages);
  };

  return (
    <div>
      <Heading
        title="Image Generation"
        desc="Turn your prompt to an Image"
        icon={ImageIcon}
        iconColor="text-red-500"
        bgColor="bg-red-500/10"
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
                        placeholder="A man riding a horse in desert"
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent py-4"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            defaultValue={field.value}
                            placeholder="number of p"
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="resolution"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
          <div className="mx-4 my-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {image &&
              image.map((i) => {
                return (
                  <>
                    <Image
                      src={i.url}
                      alt="Picture"
                      width={200}
                      height={200}
                      unoptimized
                    />
                  </>
                );
              })}
            {isLoading && (
              <ul className="flex gap-5">
                <Skeleton className="h-[200px] w-[200px]" />
                <Skeleton className="h-[200px] w-[200px]" />
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConversationPage;
