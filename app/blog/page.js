"use client";

import ArticleItem from "@/components/home/ArticleItem";
import Feature from "@/components/home/Feature";
import Newsletter from "@/components/home/Newsletter";

const mockHeadlines = [
    {
        title: "Revolutionizing healthcare: AI's impact on medical diagnostics",
        topic: "Healthcare",
        author: "John Doe",
    },
    {
        title: "The future of transportation: Hyperloop and beyond",
        topic: "Transportation",
        author: "Jane Smith",
    },
    {
        title: "Blockchain beyond cryptocurrency: Transforming industries",
        topic: "Blockchain",
        author: "Alice Johnson",
    },
    {
        title: "Augmented reality: Shaping tomorrow's retail experience",
        topic: "Augmented Reality",
        author: "Bob Brown",
    },
    {
        title: "Green tech innovations: Sustainable solutions for a better planet",
        topic: "Green Tech",
        author: "Eve White",
    },
    {
        title: "5G technology: Redefining connectivity and communication",
        topic: "Technology",
        author: "Michael Green",
    },
    {
        title: "Space tourism: The next frontier in travel",
        topic: "Space",
        author: "Laura Blue",
    },
    {
        title: "Robotics in manufacturing: Efficiency and automation",
        topic: "Robotics",
        author: "James Black",
    },
    {
        title: "The rise of quantum computing: Unleashing limitless potential",
        topic: "Quantum Computing",
        author: "Patricia Red",
    },
    {
        title: "Smart cities: Building the urban landscape of tomorrow",
        topic: "Smart Cities",
        author: "William Yellow",
    },
];

const HomePage = () => {
    return (
        <div className="w-full max-w-5xl px-10 md:px-20 lg:px-5 mx-auto">
            <div className="font-bold text-5xl md:text-7xl mt-32">
                TechWave Blog
            </div>
            <Feature />
            <div className="flex flex-col lg:flex-row gap-10 md:gap-20 mb-10 md:mb-20">
                <div className="w-full lg:w-[40%] relative">
                    <div className="lg:sticky top-[300px]">
                        <Newsletter />
                    </div>
                </div>
                <div className="w-full lg:w-[60%]">
                    {mockHeadlines.map((item, index) => (
                        <ArticleItem
                            key={index}
                            item={item}
                            img={`/thumbnails/${index}.avif`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
