// Form.tsx
"use client"

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { sendEmail } from '../utils/send-email';

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phoneNumber: z.string().optional(),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  subject: z.string().optional(),
  message: z.string().min(1, {
    message: "Message cannot be empty.",
  }),
});

export type FormData = z.infer<typeof formSchema>;

export function ContactForm() {

  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      phoneNumber: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  function onSubmit(data: z.infer<typeof formSchema>) {
    // Parse and validate the data using Zod
    const parsedData = formSchema.safeParse(data);
  
    if (!parsedData.success) {
      console.error('Error validating form data:', parsedData.error);
      return;
    }
  
    // Convert the validated data to an object with the required properties
    const formData = {
      message: parsedData.data.message,
      username: parsedData.data.username,
      email: parsedData.data.email,
      phoneNumber: parsedData.data.phoneNumber,
      subject: parsedData.data.subject,
    };
  
    // Send the formData object to the server
    sendEmail(formData);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >
        <div className='flex flex-row space-x-10'>
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem >
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-center items-center mt-5">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
