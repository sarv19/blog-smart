import { useCallback, useEffect, useState } from "react";

export default function useScroll(threshold) {
    const [scrolled, setScrolled] = useState(false);

    const onScroll = useCallback(() => {
        setScrolled(window.scrollY > threshold);
    }, [threshold]);

    useEffect(() => {
        const handleScroll = () => {
            onScroll();
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        } else {
            console.log("Window is undefined");
        }
    }, [onScroll]);

    return scrolled;
}
