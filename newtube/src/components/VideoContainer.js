import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../Utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);
    useEffect(() => {
        getVideos();
    }, [])

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        console.log(json.items);
        setVideos(json.items);
    }
    return (
        <div className='flex flex-wrap items-center border-b-2 md:border-none md:justify-center'>
            {videos?.map((video) => (
                <Link to={'/watch?v=' + video.id}><VideoCard key={video.id} videoInfo={video} /></Link>
            ))}

        </div>
    )
}

export default VideoContainer
