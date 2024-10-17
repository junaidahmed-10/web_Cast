import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PodcastCard from '../components/podcastCard/podcastCard'

function CategoriesPage() {
    const { cat } = useParams()
    const [podcast, setPodcast] = useState()

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(`http://localhost:5000/api/v1/getPodcastbyCat/${cat}`, {
                withCredentials: true
            }
            )
            console.log(res);

            setPodcast(res.data.data)
        }
        fetch()
    }, [])
    return (
        <div className='px-4 py-4 lg:px-12'>
            <h1 className='text-xl font-semibold'>
                {cat}
            </h1>
            <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {podcast && podcast.length >= 0 && 
                    podcast.map((items, i) =>
                    (<div key={i}>
                        <PodcastCard items={items}/>{" "}
                    </div>))}
                    {podcast && podcast.length === 0 && <div 
                    className='text-3xl font-bold h-screen text-zinc-700 flex items-center justify-center'>
                     No Podcasts right now</div>
                    }
            </div>
        </div>
    )
}

export default CategoriesPage