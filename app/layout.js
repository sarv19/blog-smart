import { Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
    title: "TechWave | Navigating the Currents of Technological Innovation",
    description: "Navigating the Currents of Technological Innovation",
    icons: {
        icon: [
            {
                url: "/favicon.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/favicon.png",
                media: "(prefers-color-scheme: dark)",
            },
        ],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={raleway.className}>
                <Suspense fallback="...">
                    <Toaster />
                    {children}
                </Suspense>
            </body>
        </html>
    );
}
