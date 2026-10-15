

'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Resume', href: '/resume.pdf' },
    { label: 'Contact', href: '#contact' },
];

const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/asifali62', Icon: GrLinkedinOption },
    { label: 'GitHub', href: 'https://github.com/asifdev62', Icon: FaGithub },
];


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <header
            className={`sticky top-0 z-50 w-full bg-[#0F1019] transition-all duration-300 ${
                scrolled
                    ? 'border-b border-white/10 shadow-lg shadow-black/30 py-3'
                    : 'border-b border-transparent py-3'
            }`}
        >
            <nav
                aria-label="Main"
                className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 "
            >
                {/* Logo */}
                <a href="#" className="flex items-center" aria-label="Home">
                    <Image
                        src="/logo.png"
                        alt="navlogo"
                        width={200}
                        height={200}
                        priority
                        className="h-12 w-auto sm:h-13"
                    />
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-8 md:flex">
                    {links.map(({ label, href }) => (
                        <li key={label}>
                            <a
                                href={href}
                                className="group relative py-1 text-[15px] font-medium text-slate-300 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                            >
                                {label}
                                <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-teal-400 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop socials */}
                <div className="hidden items-center gap-3 md:flex">
                    {socials.map(({ label, href, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-teal-400 hover:bg-teal-400 hover:text-[#0F1019] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400"
                        >
                            <Icon className="text-lg" />
                        </a>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-200 transition hover:bg-white/10 md:hidden"
                >
                    {open ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </nav>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`grid transition-all duration-300 ease-out md:hidden ${
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="overflow-hidden">
                    <ul className="flex flex-col gap-1 border-t border-white/10 bg-[#0F1019] px-5 py-4">
                        {links.map(({ label, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-300 transition hover:bg-white/5 hover:text-teal-400"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li className="mt-2 flex items-center gap-3 px-3 pt-3">
                            {socials.map(({ label, href, Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition hover:border-teal-400 hover:bg-teal-400 hover:text-[#0F1019]"
                                >
                                    <Icon className="text-lg" />
                                </a>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Navbar;


