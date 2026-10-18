'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import type { IconType } from 'react-icons';
import { FaGithub, FaWhatsapp } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '/skills' },
    { label: 'Resume', href: '/resume' },
    { label: 'Contact', href: '/contact' },
];

interface SocialLink {
    label: string;
    href: string;
    Icon: IconType;
    ariaLabel?: string;
    title?: string;
}

const socials: SocialLink[] = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/asifali62', Icon: GrLinkedinOption },
    { label: 'GitHub', href: 'https://github.com/asifdev62', Icon: FaGithub },
    {
        label: 'WhatsApp',
        ariaLabel: 'Chat with me on WhatsApp',
        title: 'Chat with me on WhatsApp',
        href: 'https://wa.me/8801823059188',
        Icon: FaWhatsapp,
    },
];

const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const isActive = (href: string) =>
        href === '/'
            ? pathname === '/'
            : pathname === href || pathname.startsWith(`${href}/`);

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
                <Link href="/" className="flex items-center" aria-label="Home">
                    <Image
                        src="/logo.png"
                        alt="navlogo"
                        width={200}
                        height={200}
                        priority
                        className="h-12 w-auto sm:h-13"
                    />
                </Link>

                {/* Desktop links */}
                <ul className="hidden items-center gap-6 md:flex lg:gap-8">
                    {links.map(({ label, href }) => {
                        const active = isActive(href);
                        return (
                            <li key={label}>
                                <Link
                                    href={href}
                                    aria-current={active ? 'page' : undefined}
                                    className={`group relative py-1 text-[15px] font-medium transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none ${
                                        active ? 'text-white' : 'text-slate-300'
                                    }`}
                                >
                                    {label}
                                    <span
                                        className={`absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full bg-teal-400 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100 ${
                                            active ? 'scale-x-100' : 'scale-x-0'
                                        }`}
                                    />
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Desktop socials */}
                <div className="hidden items-center gap-3 md:flex">
                    {socials.map(({ label, href, Icon, ariaLabel, title }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={ariaLabel ?? label}
                            title={title}
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
                    className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-200 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 md:hidden"
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
                        {links.map(({ label, href }) => {
                            const active = isActive(href);
                            return (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        onClick={() => setOpen(false)}
                                        aria-current={active ? 'page' : undefined}
                                        className={`block rounded-lg px-3 py-3 text-base font-medium transition hover:bg-white/5 hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 ${
                                            active ? 'text-teal-400' : 'text-slate-300'
                                        }`}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                        <li className="mt-2 flex items-center gap-3 px-3 pt-3">
                            {socials.map(({ label, href, Icon, ariaLabel, title }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={ariaLabel ?? label}
                                    title={title}
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
