import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../Utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../Utils/constants';
import { cacheResults } from '../Utils/searchSlice';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestions, setShowSuggestion] = useState(false);

    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestion(searchCache[searchQuery]);

            } else {
                getSearchSugsestions();

            }
        }, 200);

        return () => {
            clearTimeout(timer);

        };

    }, [searchQuery]);

    const getSearchSugsestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json)
        setSuggestion(json[1]);

        dispatch(cacheResults({
            [searchQuery]: json[1],
        }));
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    };

    return (
        <div className='grid grid-flow-col p-3 m-3 shadow-lg'>
            <div className='flex col-span-1'>
                <img
                    onClick={() => toggleMenuHandler()}
                    className="h-12 cursor-pointer"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHo_fBvrQ8deOq1cQ308llI19swgamCJLSZT1vdcD_UhCExu7It2exmLtRXJEFLFNho98&usqp=CAU"
                    alt=''
                />
                <img
                    className="h-12 mx-10"
                    src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
                    alt=''
                />
            </div>

            <div className="col-span-9 px-9 items-center justify-center">
                <div>
                    <input
                        className="w-1/2 border border-gray-400 p-2 rounded-l-full transition duration-300 focus:border-blue-500 focus:outline-none focus:shadow-outline-blue"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)}

                        placeholder="Search"

                    />
                    <button className="border border-gray-400 px-3 py-2 rounded-r-full bg-gray-200">
                        🔍
                    </button>
                </div>
                {showSuggestions && (<div className='fixed bg-white py-2 px-2 w-[26rem] rounded-lg shadow-lg border border-gray-100 '>
                    <ul>
                        {suggestion.map((s) =>
                            <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>
                        )}


                    </ul>
                </div>
                )}

            </div>

            <div className='col-span-1'>
                <img
                    className='h-6'
                    src='https://i.pinimg.com/1200x/96/f4/29/96f429ea8336146cb2f729eb5a8511c8.jpg'
                    alt=''
                />

            </div>
            <div className=''>
                <img
                    className='h-6'
                    src='https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-bell-512.png'
                    alt=''
                />
            </div>
            <div className=''>
                <img
                    className='h-7'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVhtFJc9v3hEBfhJiOhYMS_60ieEbiOjPJyxl8F2dIBw&s'
                    alt=''
                />

            </div>
        </div>

    );
}

export default Head;
