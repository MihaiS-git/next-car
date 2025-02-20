import React from "react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col bg-zinc-900 opacity-80 w-full sm:w-10/12 md:w-8/12 xl:w-6/12 p-8 text-zinc-50 text-center">
            {children}
        </div>
    );
}
