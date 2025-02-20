"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/app/ui/button";

export default function SignupForm() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <>
            <form>
                <p className="flex flex-row justify-evenly my-4 mt-8">
                    <label htmlFor="email" className="w-3/12 text-left">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="w-8/12 px-2 py-1 text-zinc-950"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </p>

                <p className="flex flex-row justify-evenly my-4">
                    <label htmlFor="password" className="w-3/12 text-left">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="w-8/12 px-2 py-1 text-zinc-950"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </p>

                <p className="flex flex-row justify-evenly my-4">
                    <label
                        htmlFor="confirmPassword"
                        className="w-3/12 text-left"
                    >
                        Confirm
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="w-8/12 px-2 py-1 text-zinc-950"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </p>

                <p className="my-4">
                    <Button
                        type="submit"
                        variant="outline"
                        size="lg"
                        className="text-zinc-950 font-semibold hover:animate-pulse my-4"
                    >
                        Signup
                    </Button>
                </p>
                <p className="my-4">
                    <Link href="/auth/login">Login with existent account</Link>
                </p>
            </form>
            <div className="text-right">
                <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => router.push("/")}
                >
                    <X />
                </Button>
            </div>
        </>
    );
}
