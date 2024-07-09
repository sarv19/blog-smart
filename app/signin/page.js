"use client";

import React, { useEffect, useState } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { isLocalPath } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { login, signup } from "./actions";
import { Caveat } from 'next/font/google';
import Image from "next/image";
import { supabase } from "@/lib/supabase/client";

const caveat = Caveat({ subsets: ['latin'] });

const Signin = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState({ login: false, signup: false });
    const [error, setError] = useState(null);
    const [signupMessage, setSignupMessage] = useState("");

    const searchParams = useSearchParams();

    const redirectUrl = searchParams.get("redirect");

    useEffect(() => {
        const getUser = async () => {
          const {
            data: { user },
          } = await supabase.auth.getUser();
          if (user && user.id) router.push("/");
        };
    
        getUser();
      }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const isDisabled = email === "" || password === "";

    const handleLogin = async (e) => {
        setIsLoading({ login: true, signup: false });
        error && setError(null);
        signupMessage && setSignupMessage("");
        e.preventDefault();
        const formData = new FormData(e.target);
        const loginError = await login(
            formData,
            isLocalPath(redirectUrl) ? redirectUrl : ""
        );
        if (loginError) {
            setIsLoading({ login: false, signup: false });
            setError(loginError);
        }
    };

    const handleSignup = async () => {
        setIsLoading({ login: false, signup: true });
        error && setError(null);
        signupMessage && setSignupMessage("");
        const signupResult = await signup({ email, password });
        if (signupResult.status !== 200) {
            setError(signupResult.message);
        } else {
            setSignupMessage(signupResult.message);
        }
        setIsLoading({ login: false, signup: false });
    };

    return (
        <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
            <Boxes />
            <div className="relative z-20 flex items-center gap-2 mb-8">
                <Image
                    src='/logo.png'
                    alt='TechWave logo'
                    width='30'
                    height='30'
                    className='mr-2 rounded-sm'
                />
                <p className={`font-medium text-2xl text-white tracking-widest ${caveat.className}`}>TechWave</p>
            </div>
            <form onSubmit={handleLogin}>
                <Card className="w-[350px] relative z-20">
                    <CardHeader>
                        <CardTitle>Sign in</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Email</Label>
                                <Input
                                    id="name"
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                        </div>
                        {error && (
                            <div className="mt-3 text-xs text-red-600">
                                {error}
                            </div>
                        )}{" "}
                        {signupMessage && (
                            <div className="mt-3 text-xs text-green-600">
                                {signupMessage}
                            </div>
                        )}{" "}
                    </CardContent>
                    <CardFooter className="flex justify-between gap-4">
                        <Button
                            type="submit"
                            disabled={isDisabled || isLoading.login}
                            className="w-full bg-[#5E17EB] hover:bg-[#7d4cde]"
                        >
                            {isLoading.login && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}{" "}
                            Sign in
                        </Button>
                        <Button
                            variant="ghost"
                            disabled={isDisabled || isLoading.signup}
                            className="w-full text-[#5E17EB] hover:text-[#5E17EB]"
                            onClick={handleSignup}
                        >
                            {isLoading.signup && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}{" "}
                            Sign up
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    );
}

export default Signin;
