'use client';
import {useState} from 'react';
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full font-fredoka text-[#405068] text-xl p-7 sticky top-0 z-10 bg-[#fff6f6]">
            {/* Top row */}
            <div className="flex items-center gap-3">
                <span className="w-8 animate-blink" role="img" aria-label="Eye">👁</span>
                <Link href="/Home"><h1>AvenueSeekers</h1></Link>

                {/* Desktop links: hidden on small screens, pushed right */}
                <div className="hidden md:flex space-x-6 ml-auto gap-10">
                    <Link href="/Jobs">Jobs</Link>
                    <Link href="/Volunteer">Volunteer</Link>
                    <Link href="/ForEmployers">For Employers</Link>
                </div>

                {/* Mobile button: hidden on md and up */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden ml-auto focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <div className="relative w-8 h-8">
                        <Image src="/settings.png" alt="Menu" fill sizes="32px" className="object-contain"/>
                    </div>
                </button>
            </div>

            {/* Mobile dropdown: its own row below the top row */}
            {isOpen && (
                <div className="md:hidden bg-white border-t mt-4 px-4 pt-2 pb-4 space-y-2">
                    <Link href="/Jobs" className="block py-2" onClick={() => setIsOpen(false)}>Jobs</Link>
                    <Link href="/Volunteer" className="block py-2" onClick={() => setIsOpen(false)}>Volunteer</Link>
                    <Link href="/ForEmployers" className="block py-2" onClick={() => setIsOpen(false)}>For Employers</Link>
                </div>
            )}
        </nav>
    );
}