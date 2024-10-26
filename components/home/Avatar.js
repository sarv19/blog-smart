const { default: Image } = require("next/image");

const Avatar = ({ name, src = "/avatar.webp" }) => {
    return (
        <div className="flex items-center gap-2 text-gray-700">
            <Image
                alt="author img"
                src={src}
                width={30}
                height={30}
                className="rounded-full h-full w-auto object-cover"
            />
            {name || "Sarah V"}
        </div>
    );
};

export default Avatar;
