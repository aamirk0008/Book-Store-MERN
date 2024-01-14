import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered, FaBlog, FaBookAtlas, FaBookOpenReader, FaXmark } from "react-icons/fa6";
import Home from '../Home/home';
import About from './About';
import Blog from './Blog';
import Shop from '../shop/Shop';
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const {user} = useContext(AuthContext)
    console.log(user);
    // Toggle Menu
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const handleScroll = () => {
            if(window.screenY > 100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () =>{
            window.addEventListener("scroll", handleScroll)
        }
    },[])

    // NavItems 
        const navItems = [
            {link: "Home", path: "/"},
            {link: "About", path: "/about"},
            {link: "Shop", path: "/shop"},
            {link: "Admin", path: "/admin/dashboard"},
            {link: "Blog", path: "/blog"}
        ]

  return (
    <header className='w-full bg-tranparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blur-sm" : ""}`}>
            <div className='flex justify-between items-center gap-8'>
                {/* logo */}
                <Link to="/" className='text-2xl font-bold text-red-700 flex items-center gap-2'><FaBookOpenReader className='inline-block'/>Bochord</Link>

                {/* nav items for large devices */}

                <ul className='md:flex space-x-12 hidden'>
                    {/* <Link to={Home} path={"/"} className='block text-base text-black cursor-pointer hover:text-red-500'>Home</Link>
                    <Link to={About} path={"/about"} className='block text-base text-black cursor-pointer hover:text-red-500'>About</Link>
                    <Link to={Shop} path={"/shop"} className='block text-base text-black cursor-pointer hover:text-red-500'>Shop</Link>
                    <Link to={Blog} path={"/blog"} className='block text-base text-black cursor-pointer hover:text-red-500'>Blog</Link> */}
                    {
                        navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-black cursor-pointer hover:text-red-500 uppercase'>{link}</Link>)
                    }
                </ul>

                {/* button for large devices */}
                <div className='space-x-12 lg:hidden lg:flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-red-600'/></button>
                    {
                        user? user.email : ""
                    }
                </div>

                {/* menu button for mobile */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none '>
                        {
                            isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : <FaBarsStaggered className='h-5 w-5 text-black'/>
                        }
                    </button>
                </div>
            </div>

            {/* navitems for small devices */}
            <div className={`flex flex-col justify-center items-center space-y-4 px-4 mt-12 py-7 bg-red-800 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-white cursor-pointer uppercase'>{link}</Link>)
                }
            </div>
        </nav>
    </header>
  )
}

export default Navbar