import Image from "next/image";
import Avatar from "./Avatar";
import Link from "next/link";
import { decode } from "he";

const ArticleItem = ({ itemData }) => {
    const { title, thumbnail, description, url, type, channel_name } = itemData;
    return (
        <Link
            // href={`/blog/${item.title.replace(/\s+/g, "-").toLowerCase()}`}
            href={url}
            target="_blank"
            className="flex flex-col md:flex-row gap-4 py-4 text-sm"
        >
            <div className="w-full md:w-[200px] h:[300px] md:h-[100px]">
                <Image
                    src={thumbnail}
                    alt={title}
                    width={200}
                    height={80}
                    className="w-full h-full rounded-md object-cover"
                />
            </div>
            <div className="pb-9 flex-1 flex flex-col gap-2 border-b">
                <div className="font-semibold text-lg">
                    {decode(title || "")}
                </div>
                <div className="text-gray-500 text-xs">{description}</div>
                <div className="flex gap-8 text-xs h-6">
                    <Avatar
                        name={channel_name}
                        src={type == "youtube" ? "/icons/youtube.svg" : null}
                    />
                    {/* <div className="flex items-center gap-2 text-gray-500">
                        <Folder width={15} height={15} fill="gray" />
                        {item.topic}
                    </div> */}
                </div>
            </div>
        </Link>
    );
};

export default ArticleItem;
