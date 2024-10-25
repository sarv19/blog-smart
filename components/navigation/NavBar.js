"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useContext, useState } from "react";
import { LogOut, Plus, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Caveat } from "next/font/google";
import { supabase } from "@/lib/supabase/client";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import Setting from "../user/Setting";
import { UserContext } from "@/app/blog/layout";
import Modal from "react-modal";

const caveat = Caveat({ subsets: ["latin"] });

export default function NavBar() {
    const scrolled = useScroll(false);
    const { user } = useContext(UserContext);
    const [modalIsOpen, setIsOpen] = useState(false);

    // const customStyles = {
    //     content: {
    //         top: "50%",
    //         left: "50%",
    //         right: "auto",
    //         bottom: "auto",
    //         marginRight: "-50%",
    //         transform: "translate(-50%, -50%)",
    //     },
    // };

    return (
        <>
            <div
                className={`fixed top-0 flex w-full justify-center px-5 md:px-10 lg:px-14 border-b border-gray-200/60 bg-white ${
                    scrolled
                        ? "backdrop-blur bg-opacity-70 border-b-0"
                        : "bg-white"
                } z-30 transition-all`}
            >
                <Modal
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    onRequestClose={() => setIsOpen(false)}
                    className="absolute bg-white w-fit h-fit flex items-center justify-center border rounded"
                    overlayClassName="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-[30]"
                >
                    <Setting />
                </Modal>
                <div className="flex h-16 w-full max-w-7xl items-center justify-between">
                    <Link href="/" className="flex items-center text-2xl">
                        <Image
                            src="/logo.png"
                            alt="TechWave logo"
                            width={30}
                            height={30}
                            className="mr-2 rounded-sm"
                        ></Image>
                        <p
                            className={`font-medium text-[#5E17EB] tracking-widest ${caveat.className}`}
                        >
                            TechWave
                        </p>
                    </Link>
                    <div className="gap-4 flex">
                        {user && user.id ? (
                            <>
                                <Button className="w-fit h-fit p-1 bg-[#5E17EB] hover:bg-[#7d4cde] mr-2">
                                    <Plus width={20} height={20} />
                                </Button>
                                <HoverCard openDelay={0}>
                                    <HoverCardTrigger
                                        dela
                                        className="cursor-pointer"
                                    >
                                        <Image
                                            alt="author img"
                                            src={"/avatar.webp"}
                                            width={20}
                                            height={20}
                                            className="rounded-full h-full w-auto object-cover"
                                        />
                                    </HoverCardTrigger>
                                    <HoverCardContent className="flex flex-col text-xs p-1 w-[150px] text-gray-600">
                                        {/* <Dialog>
                      <DialogTrigger
                        href={"/setting"}
                        className="flex items-center gap-2 py-3 px-4 border-b hover:bg-gray-100 cursor-pointer"
                      > */}
                                        <div
                                            className="flex items-center gap-2 py-3 px-4 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            <Settings width={15} height={15} />
                                            <div>Settings</div>
                                        </div>
                                        {/* </DialogTrigger>
                      <DialogContent>
                        <Setting />
                      </DialogContent>
                    </Dialog> */}
                                        <div className="flex items-center gap-2 py-3 px-4 hover:bg-gray-100 cursor-pointer">
                                            <LogOut width={15} height={15} />
                                            <div
                                                onClick={async () => {
                                                    await supabase.auth.signOut();
                                                    window.location.href = "/";
                                                }}
                                            >
                                                Logout
                                            </div>
                                        </div>
                                    </HoverCardContent>
                                </HoverCard>
                            </>
                        ) : (
                            <>
                                <Link href="/signin">
                                    <Button
                                        variant="ghost"
                                        className="rounded-2xl"
                                    >
                                        Sign in
                                    </Button>
                                </Link>
                                <Link href="/signin">
                                    <Button className="rounded-2xl">
                                        Get Started
                                    </Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
