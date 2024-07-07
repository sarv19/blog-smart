const { default: Image } = require("next/image")

const Avatar = ({ name }) => {
    return (
        <div className="flex items-center gap-2 text-gray-500">
            <Image
                alt="author img"
                src={"/avatar.webp"}
                width={15}
                height={15}
                className="rounded-full h-full w-auto object-cover"
            />
            {name || "Sarah V"}
        </div>
    )
}

export default Avatar;