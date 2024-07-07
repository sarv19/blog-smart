import Image from "next/image";
import Avatar from "./Avatar";
import { Folder } from "lucide-react";
import Link from "next/link";

const ArticleItem = ({ item, img }) => {
    return (
        <Link href={`/blog/${item.title.replace(/\s+/g, '-').toLowerCase()}`}  className="flex gap-4 py-4 text-sm">
            <div className="w-[200px] h-[100px]">
                <Image
                    src={img || "/feature-img.avif"}
                    alt="Article Image"
                    width={200}
                    height={80}
                    className="h-full rounded-md object-cover"
                />
            </div>
            <div className="pb-9 flex-1 flex flex-col gap-4 border-b">
                <div className="font-semibold text-lg">
                    {item.title}
                </div>
                <div className="flex gap-8 text-xs">
                    <Avatar name={item.author}/>
                    <div className="flex items-center gap-2 text-gray-500">
                        <Folder
                            width={15}
                            height={15}
                            fill="gray"
                        />
                        {item.topic}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ArticleItem;
