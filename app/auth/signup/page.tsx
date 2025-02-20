'use client';

import SignupForm from "@/app/ui/auth/signup-form";

export default function SignupPage() {
    return (
        <div className="">
            <h1 className="text-3xl m-2 text-red-600"><em>Signup Form</em></h1>
            <SignupForm />
        </div>
    );
}