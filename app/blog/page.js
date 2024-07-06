"use client";

import ArticleItem from "@/components/home/ArticleItem";
import Feature from "@/components/home/Feature";
import Newsletter from "@/components/home/Newsletter";

const mockHeadlines = [
  "Revolutionizing healthcare: AI's impact on medical diagnostics",
  "The future of transportation: Hyperloop and beyond",
  "Blockchain beyond cryptocurrency: Transforming industries",
  "Augmented reality: Shaping tomorrow's retail experience",
  "Green tech innovations: Sustainable solutions for a better planet",
  "5G technology: Redefining connectivity and communication",
  "Space tourism: The next frontier in travel",
  "Robotics in manufacturing: Efficiency and automation",
  "The rise of quantum computing: Unleashing limitless potential",
  "Smart cities: Building the urban landscape of tomorrow"
]


const HomePage = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="font-bold text-7xl mt-32">TechWave Blog</div>
      <Feature />
      <div className="flex gap-10">
        <div className="w-[40%] relative">
          <div className="sticky top-[300px]">
            <Newsletter />
          </div>
        </div>
        <div className="w-[60%]">
          {mockHeadlines.map(item => <ArticleItem key={item} title={item}/>)}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
