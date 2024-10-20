import Link from 'next/link';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Logo from "../../../public/pinnaclepartnerships-logo.png"
import { NavigationMenuDemo } from './navmenu';

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center py-4 text-white'>
            {/* <div className='text-2xl font-bold'>Logo</div> */}

            <Link href="/">
                <Image
                    src={Logo}
                    alt='Logo'
                    width={40}
                    height={100}
                />
            </Link>

            <div className='hidden md:block border rounded-3xl p-3 border-gray-700 hover:border-zinc-300 transition-all duration-700'>
                {/* <Link href="#" className='px-4'>About Us</Link>
                <Link href="#" className='px-4'>Hire Partner</Link>
                <Link href="#" className='px-4'>Join Partnership</Link>
                <Link href="#" className='px-4'>Resources</Link> */}

                <NavigationMenuDemo />
            </div>
            <div className='flex'>
                <div className='leading-tight font-semibold pr-4 hover:text-blue-200 hover:cursor-pointer'>Login</div>
                <div className='md:hidden'><Menu /></div>
            </div>
        </nav>
    );
}