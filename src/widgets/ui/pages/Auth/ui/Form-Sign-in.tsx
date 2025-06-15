'use client'
import { Button } from "@/shared/ui/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/shadcn/card";
import { ShineBorder } from "@/shared/ui/magicui/shine-border";
import Link from "next/link";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/shadcn/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/shared/ui/shadcn/input";
import { useState } from "react";
import axios from "axios";

const formSchema = z.object({
  email: z.string().email("Некорректный email"),
  password: z.string().min(8, "Пароль обязателен"),
});

export function FormSignIn() {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const response = await axios.post("/api/auth/login", values);

      if (response.data.success) {
        toast.success("Вход выполнен успешно!");
        localStorage.setItem("authToken", response.data.data?.token || "");
      } else {
        toast.error(response.data.message || "Ошибка входа");
      }
    } catch (error) {
      console.error("Ошибка входа:", error);
      toast.error("Произошла ошибка при входе");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="relative overflow-hidden max-w-[350px] md:max-w-[500px] xl:max-w-[700px] 2xl:max-w-[1000px] w-full">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <CardHeader>
        <CardTitle>Войти</CardTitle>
        <CardDescription>
          Пожалуйста, войдите в аккаунт
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="name@mail.com"
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
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Пароль</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        {...field}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button 
              variant='form'
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Вход..." : "Войти"}
            </Button>
          </form>
        </Form>
        
        <Button variant='forminvisible' asChild disabled={isLoading}>
          <Link href='/registration'>Регистрация</Link>
        </Button>
      </CardContent>
    </Card>
  );
}