"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { loginSchema } from "@/lib/validations"
import { z } from "zod"
import {signIn} from 'next-auth/react'
import { useSearchParams } from "next/navigation"
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


export default function login() {
    // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get("callbackUrl")
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    await signIn("credentials",{
        email:values.email,
        password:values.password,
        redirect:true,
        callbackUrl:callbackUrl ||  "/"
    })
    
  }
  return (
    <div className="h-screen flex items-center justify-center">
     <div className="w-full sm:w-1/3 bg-white p-6 rounded-xl dark:bg-gray-800">
        <div className="title">
        <h1 className="text-3xl font-bold text-center">Login  to your account</h1>
        </div>
        <div className="form-container">
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="enter your email" {...field} />
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
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="enter your password" {...field} type='password' />
              </FormControl>
        
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
        </div>
     </div>

    </div>
  )
}
