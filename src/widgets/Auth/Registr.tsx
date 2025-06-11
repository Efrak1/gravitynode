'use client'
import { useState } from "react";
import axios from "axios";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { ShineBorder } from "@/shared/ui/magicui/shine-border";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

interface ApiResponse {
  success: boolean;
  message?: string;
  data?: {
    userId: string;
    token: string;
  };
}

export function Registr() {
  // const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post<ApiResponse>("/api/auth/register", formData);
      
      if (response.data.success) {
        toast.success("Регистрация прошла успешно!");
        
        localStorage.setItem("authToken", response.data.data?.token || "");
        
        // router.push("/SignIn");
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
        <form onSubmit={handleSubmit}>
          <div className="grid xl:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fullName">ФИО</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Иванов Иван Иванович"
                required
                value={formData.fullName}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@mail.com"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Номер телефона</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7(000)000-00-00"
                required
                value={formData.phone}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                required
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full rounded-xl mt-8 border-[1px]"
            disabled={isLoading}
          >
            {isLoading ? "Регистрация..." : "Зарегистрироваться"}
          </Button>
        </form>
        <Button className="w-full rounded-xl mt-3" disabled={isLoading}>
          <Link href='/SignIn'>Войти</Link>
        </Button>
      </CardContent>
    </Card>
  );
}