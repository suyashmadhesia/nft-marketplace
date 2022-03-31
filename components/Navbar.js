import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from "react";

function Navbar() {

    const router = useRouter();

    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive(!isActive);
    }

    return (
        <>
            <div className='bg-white flex justify-between py-3 md:hidden'>
                <Link href="/">
                    <a className='text-black px-6 font-medium text-xl'>NFT Space</a>
                </Link>
                <button className='px-4 focus:outline-none' onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>
            </div>
            <div className={isActive ? `bg-white text-gray-500 w-48 space-y-16 px-2 py-16 absolute md:relative md:translate-x-0 inset-y-0 left-0 transform transition duration-200 ease-in-out` : 'bg-white text-gray-500 w-48 space-y-16 px-2 py-16 absolute md:relative md:translate-x-0 inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-in-out'}>
                <Link href="/">
                    <a className='text-black px-6 font-medium text-xl'>NFT Space</a>
                </Link>
                <nav className='px-2'>
                    <Link href="/">
                        <a className={router.pathname == "/" ? 'block py-3 flex text-gray-900 px-4' : "block py-3 flex rounded transition duration-400 hover:bg-gray-200 px-4"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            <span className='px-3 text-sm'><button onClick={() => { setIsActive(false) }}>Home</button></span>

                        </a>
                    </Link>
                    <Link href="/dashboard">
                        <a className={router.pathname == "/dashboard" ? 'block py-3 flex text-gray-900 px-4' : "block py-3 flex rounded transition duration-400 hover:bg-gray-200 px-4"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                            </svg>
                            <span className='px-3 text-sm'><button onClick={() => { setIsActive(false) }}>Dashboard</button></span>

                        </a>
                    </Link>
                    <Link href="/collection">
                        <a className={router.pathname == "/collection" ? 'block py-3 flex text-gray-900 px-4' : "block py-3 flex rounded transition duration-400 hover:bg-gray-200 px-4"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                            <span className='px-3 text-sm'><button onClick={() => { setIsActive(false) }}>Collection</button></span>
                        </a>
                    </Link>
                    <Link href="/create-item">
                        <a className={router.pathname == "/create-item" ? 'block py-3 flex text-gray-900 px-4' : "block py-3 flex rounded transition duration-400 hover:bg-gray-200 px-4"}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className='px-3 text-sm'><button onClick={() => { setIsActive(false) }}>Create</button></span>
                        </a>
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Navbar