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

export function Form() {
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
                <form>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="name@mail.com" required/>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="********" required/>
                        </div>
                    </div>
                    <Button type="submit" className="w-full rounded-xl mt-8 border-[1px]">Войти</Button>
                </form>
                <Button className="w-full rounded-xl mt-3"><Link href='/Registation'>Регистрация</Link></Button>
            </CardContent>
        </Card>
    );
}
