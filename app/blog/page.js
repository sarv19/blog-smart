"use client";

import { useState, useEffect } from "react";
import ArticleItem from "@/components/home/ArticleItem";
import Feature from "@/components/home/Feature";
import Newsletter from "@/components/home/Newsletter";
import { supabase } from "@/lib/supabase/client";

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data: blogs, error: fetchError } = await supabase
                .from("content")
                .select()
                .order("created_at", { ascending: false });

            if (fetchError) {
                console.error("error fetching", fetchError);
            }
            if (blogs) {
                setData(blogs);
            }
        };
        getData();
    }, []);

    return (
        <div className="w-full max-w-5xl px-10 md:px-20 lg:px-5 mx-auto">
            <div className="font-bold text-5xl md:text-7xl mt-32">
                Tech world latest content
            </div>
            <Feature />
            <div className="flex flex-col lg:flex-row gap-10 md:gap-20 mb-10 md:mb-20">
                <div className="w-full lg:w-[40%] relative">
                    <div className="lg:sticky top-[300px]">
                        <Newsletter />
                    </div>
                </div>
                <div className="w-full lg:w-[60%]">
                    {data.map((item) => (
                        <ArticleItem key={item.id} itemData={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
