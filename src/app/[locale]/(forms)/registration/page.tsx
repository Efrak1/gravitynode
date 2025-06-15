import React from "react";
import { Ripple } from "@/shared/ui/magicui/ripple";
import { Registr } from "@/widgets/ui/pages/Auth/ui/Form-registr";


export default function Registration() {
    return (
        <div className="flex flex-col justify-center items-center mt-48">
            <Ripple />
            <Registr />
        </div>
    );
}