import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function isLocalPath(path) {
    if (!path) return true;
    if (path.startsWith("/")) {
        return true;
    }

    if (path.startsWith("./") || path.startsWith("../")) {
        return true;
    }

    return false;
}
