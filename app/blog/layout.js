"use client";

import { createContext, useEffect, useState } from "react";
import Footer from "@/components/navigation/Footer";
import NavBar from "@/components/navigation/NavBar";
import { supabase } from "@/lib/supabase/client";

export const UserContext = createContext();

export default function BlogLayout({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            setUser(user);
        };

        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            <NavBar />
            <div className="flex-grow w-full">{children}</div>
            <Footer />
        </UserContext.Provider>
    );
}
