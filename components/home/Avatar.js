const { default: Image } = require("next/image")

const Avatar = () => {
    return (
        <div className="flex gap-2 text-gray-500">
            <Image
                alt="author img"
                src={"/avatar.webp"}
                width={15}
                height={15}
                className="rounded-full h-full w-auto object-cover"
            />
            Sarah V
        </div>
    )
}

export default Avatar;