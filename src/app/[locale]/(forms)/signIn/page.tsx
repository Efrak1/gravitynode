import React from "react";
import { Ripple } from "@/shared/ui/magicui/ripple";
import { FormSignIn } from "@/widgets/ui/pages/Auth/ui/Form-Sign-in";


export default function Auth() {
    return (
        <div className="flex flex-col justify-center items-center mt-48">
            <Ripple />
            <FormSignIn />
        </div>
    );
}
