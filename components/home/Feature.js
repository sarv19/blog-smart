import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Avatar from "./Avatar";
import Link from "next/link";

const Feature = () => {
    const title = "Unbreakable bonds: Why robots will never rule the world";

    return (
        <div className="py-12 flex gap-20 text-sm">
            <div className="w-[70%] h-full mt-12">
                <Image 
                    alt="feature-image"
                    src={"/feature-img.avif"}
                    width={300}
                    height={300}
                    className="w-full h-fit rounded-xl"
                />
            </div>
            <div className="w-[30%] flex flex-col gap-4">
                <Badge className="w-fit text-[#5E17EB] bg-purple-200 rounded-xl">Feature</Badge>
                <Link href={`/blog/${title.replace(/\s+/g, '-').toLowerCase()}`} className="font-semibold text-3xl leading-9">{title}</Link>
                <Avatar />
                <Separator/>
                <div className="text-gray-500">
                    Discover why robots will never dominate our world. From emotions to ethical dilemmas, explore what sets humanity apart and keeps us in control of our destiny.
                </div>
                <Link href={`/blog/${title.replace(/\s+/g, '-').toLowerCase()}`} className="flex gap-2 items-center text-[#5E17EB]">Read more <SquareArrowOutUpRight width={15} height={15}/></Link>
            </div>
        </div>
    )
}

export default Feature;