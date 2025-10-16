"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/actions/contact";
import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters.").max(1000),
});

type ContactFormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service');
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: service || "",
      message: "",
    },
  });

  useEffect(() => {
    if (service) {
      form.setValue('service', service);
    }
  }, [service, form]);

  function onSubmit(values: ContactFormValues) {
    startTransition(async () => {
        const result = await submitContactForm(values);
        if (result.success) {
            toast({
                title: "Message Sent!",
                description: "Thank you for contacting us. We'll get back to you shortly.",
            });
            form.reset();
        } else {
             toast({
                title: "Error",
                description: result.error || "An unexpected error occurred. Please try again.",
                variant: "destructive",
            });
        }
    });
  }

  return (
    <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
        </CardHeader>
        <CardContent>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                        <Input placeholder="John Doe" {...field} />
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
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                 {service && (
                    <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Service of Interest</FormLabel>
                        <FormControl>
                            <Input {...field} readOnly className="bg-muted" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                )}
                <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Tell us how we can help..."
                        className="min-h-[120px]"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
                </Button>
            </form>
            </Form>
        </CardContent>
    </Card>
  );
}
