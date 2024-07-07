import { Caveat } from 'next/font/google';
import { Separator } from '@/components/ui/separator';
import { Smile } from 'lucide-react';

const caveat = Caveat({ subsets: ['latin'] });

const Footer = () => {
    return (
        <div className='relative flex flex-col items-center border-t gap-4 pt-10 pb-32 text-xs'>
            <div className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full">
                    <div className="grid grid-cols-2 gap-20 px-4 pb-20 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Careers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Brand Center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Discord Server</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Twitter</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">iOS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Android</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Windows</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <p className={`font-medium text-2xl tracking-widest ${caveat.className}`}>TechWave</p>
            <div className='text-gray-400'>2024 © TechWave. All Rights Reserved</div>
            <div className="text-gray-400 flex h-5 items-center gap-4">
                <div className='cursor-pointer'>Sitemap</div>
                <Separator orientation="vertical" />
                <div className='cursor-pointer'>Terms of Service</div>
                <Separator orientation="vertical" />
                <div className='cursor-pointer'>Privacy Policy</div>
            </div>
            <div className="footer-emoji">
                <div className="image smile-icon">
                    <img src="/rickroll.gif" loading="lazy" alt="" className="image-contain"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;