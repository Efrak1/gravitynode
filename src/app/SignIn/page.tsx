import React from "react";
import { Ripple } from "@/shared/ui/magicui/ripple";
import { Form } from "@/widgets/Auth/sign-in";


export default function Auth() {
    return (
        <div className="flex flex-col justify-center items-center mt-48">
            <Ripple />
            <Form />
        </div>
    );
}
