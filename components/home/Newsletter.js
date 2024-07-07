"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
    const [inputValue, setInputValue] = useState("");
    const { toast } = useToast();
    const subscribe = () => {
        toast({title: "Thanks for subscribing!"})
    }
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="font-medium text-3xl">Recent articles</div>
            <div className="text-sm text-gray-500">The latest in Technological Innovation. Subscribe below!</div>
            <div className="relative w-full md:w-fit lg:w-full flex text-gray-500">
                    <Input
                        type="text"
                        autoComplete="off"
                        autoFocus
                        className="text-md border-0 text-xs rounded-2xl w-full md:w-[300px] lg:w-full bg-gray-100 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:placeholder-gray-400 py-2"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && subscribe()}
                    />
                    <div className="absolute right-0 items-center inset-y-0">
                        <Button
                            variant="ghost"
                            className="inline-flex text-xs w-fit h-fit py-2 px-4 items-center justify-center rounded-2xl text-gray-600 hover:bg-gray-200 focus:outline-none"
                            onClick={subscribe}
                            disabled={!inputValue.trim()}
                        >
                            Subscribe
                        </Button>
                    </div>
                </div>
        </div>
    )
}

export default Newsletter;