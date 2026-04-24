import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Search from './Search';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import Nav from './Nav';

const Header = () => {
    return (
        <>
            <div className='headerWrapper bg-[#FAFAFA] py-4'>
                <header className='py-3 border-b border-[rgba(0,0,0,0.1)]'>
                    <div className='container flex items-center justify-between'>
                        <div className='logo'>
                            <Link href={"/"}>
                                <Image src={"/logo.png"} width={230} height={61} alt='logo' />
                            </Link>
                        </div>
                        <div className='flex items-center gap-5'>
                            <Search />
                            <div className='flex items-center gap-3'>
                                <Link href={"/login"} className='hover:text-primary'>
                                    Login
                                </Link>
                                <span>|</span>
                                <Link href={"/register"} className='hover:text-primary'>
                                    Register
                                </Link>
                            </div>
                            <div className='flex items-center gap-8'>
                                <Link href={"/wishlist"} className='relative flex'>
                                    <span className='bg-[#DC2626] w-6 h-6 text-white rounded-full flex items-center justify-center absolute -top-2.5 -right-4.25 z-50'>3</span>
                                    <FaRegHeart size={25} className='text-gray-700' />
                                </Link>
                                <Link href={"/cart"} className='relative flex'>
                                    <span className='bg-[#DC2626] w-6 h-6 text-white rounded-full flex items-center justify-center absolute -top-2.5 -right-4.25 z-50'>3</span>
                                    <IoCartOutline size={30} className='text-gray-700' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </header>
                <Nav />
            </div>
        </>
    )
}

export default Header;