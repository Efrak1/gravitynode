'use client'
import { useState } from "react";
import axios from "axios";
import { Button } from "@/shared/ui/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/shadcn/card";
import { Input } from "@/shared/ui/shadcn/input";
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

const formSchema = z.object({
  fullName: z.string().min(10, "ФИО должно содержать минимум 10 символов"),
  email: z.string().email("Некорректный email"),
  phone: z.string().min(11, "Некорректный номер телефона"),
  password: z.string().min(8, "Пароль должен содержать минимум 8 символов"),
});

export function Registr() {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const response = await axios.post("/api/auth/register", values);

      if (response.data.success) {
        toast.success("Регистрация прошла успешно!");
        localStorage.setItem("authToken", response.data.data?.token || "");
      } else {
        toast.error(response.data.message || "Ошибка регистрации");
      }
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      toast.error("Произошла ошибка при регистрации");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="relative overflow-hidden max-w-[350px] md:max-w-[500px] xl:max-w-[700px] 2xl:max-w-[1000px] w-full">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <CardHeader>
        <CardTitle>Регистрация</CardTitle>
        <CardDescription>
          Пожалуйста, зарегистрируйтесь для создания аккаунта
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid xl:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ФИО</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Иванов Иван Иванович"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Номер телефона</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+7(000)000-00-00"
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
              {isLoading ? "Регистрация..." : "Зарегистрироваться"}
            </Button>
          </form>
        </Form>
        
        <Button variant='forminvisible' disabled={isLoading}>
          <Link href='/signIn'>Войти</Link>
        </Button>
      </CardContent>
    </Card>
  );
}