"use client";

import { Ripple } from "@/components/magicui/ripple";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { MagicCard } from "@/shared/ui/magicui/magic-card";
import { ShineBorder } from "@/shared/ui/magicui/shine-border";
import { useEffect, useState } from "react";

function Auth() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Дефолтные значения для SSR
  const gradientColor = mounted 
    ? (document.documentElement.classList.contains('dark') ? "#262626" : "#D9D9D955") 
    : "#D9D9D955";

  return (
    <div className="min-h-screen grid place-items-center p-4">
        <Ripple />
      <Card className="p-0 max-w-sm w-full shadow-none border-none">
        <MagicCard
          gradientColor={gradientColor}
          className="p-0"
        >
          {mounted && <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />}
          <CardHeader className="border-b border-border p-4 [.border-b]:pb-4">
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="p-4 border-t border-border [.border-t]:pt-4">
            <Button className="w-full">Sign In</Button>
          </CardFooter>
        </MagicCard>
      </Card>
    </div>
  );
}

export default Auth;