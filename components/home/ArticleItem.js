import Image from "next/image";
import Avatar from "./Avatar";

const ArticleItem = ({ title }) => {
    return (
        <div className="flex gap-4 py-4 text-sm">
            <div className="w-[200px] h-[120px]">
                <Image
                    src="/feature-img.avif"
                    alt="Article Image"
                    width={200}
                    height={120}
                    className="rounded-md object-cover"
                />
            </div>
            <div className="pb-9 flex-1 flex flex-col gap-4 border-b">
                <div className="font-medium text-lg">
                    {title}
                </div>
                <Avatar />
            </div>
        </div>
    )
}

export default ArticleItem;
