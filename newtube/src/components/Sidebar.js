import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    AiOutlineHome,
    AiOutlineVideoCameraAdd,
    AiOutlineScissor,
    AiOutlineFire,
    AiOutlineShopping,
    AiOutlineTrophy,
    AiOutlineBulb,
    AiOutlineShop
} from "react-icons/ai";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { RiVideoLine } from "react-icons/ri";
import { BiTimeFive, BiMovie } from "react-icons/bi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { TbLivePhoto } from "react-icons/tb";
import { SiYoutubegaming } from "react-icons/si";
import { BsNewspaper } from "react-icons/bs";



const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div className="w-max shadow-lg rounded-md m-2 p-2 overflow-y-scroll h-screen sticky top-20 text-md" >
            <ul className="py-2">
                <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer "><AiOutlineHome className="inline mr-2" /><Link to='/'>Home</Link></li>
                <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><AiOutlineVideoCameraAdd className="inline mr-2" />Shorts</li>
                <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><MdOutlineSubscriptions className="inline mr-2" />
                    Subscriptions
                </li>

            </ul>
            <hr />
            <ul>
                <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><MdOutlineVideoLibrary className="inline mr-2" />Library</li>
                <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><VscHistory className="inline mr-2" />History</li>
                <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><RiVideoLine className="inline mr-2" />Your Videos</li>
                <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><BiTimeFive className="inline mr-2" />Watch Later</li>
                <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><AiOutlineScissor className="inline mr-2" />Your clips</li>
            </ul>
            <hr />

            <hr />
            <h3 className="text-xl font-bold py-4 " > Explore</h3>
            <div className="h-[200px] " >
                <ul >
                    <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><AiOutlineFire className="inline mr-2" />Trending</li>
                    <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><AiOutlineShopping className="inline mr-2" />Shopping</li>
                    <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><IoMusicalNoteOutline className="inline mr-2" />Music</li>
                    <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><BiMovie className="inline mr-2" />Movies</li>
                    <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><TbLivePhoto className="inline mr-2" />Live</li>
                    <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><SiYoutubegaming className="inline mr-2" />Gaming</li>
                    <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><BsNewspaper className="inline mr-2" />News</li>
                    <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><AiOutlineTrophy className="inline mr-2" />Sports</li>
                    <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><AiOutlineBulb className="inline mr-2" />Learning</li>
                    <li className="py-1 px-2 hover:bg-slate-100 rounded-md cursor-pointer"><AiOutlineShop className="inline mr-2" />Fashion & Beauty</li>
                </ul>
            </div>
        </div >
    )
}

export default Sidebar




