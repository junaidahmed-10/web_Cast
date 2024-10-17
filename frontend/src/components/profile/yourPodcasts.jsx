import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import PodcastCard from '../podcastCard/podcastCard'

function YourPodcasts() {

  const [podcast, setPodcast] = useState()

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get("http://localhost:5000/api/v1/getUserPodcasts",{
              withCredentials : true
            }
            )
            console.log(res);

            setPodcast(res.data.data)
        }
        fetch()
    }, [])

    console.log(podcast)

  return (
    <div className='px-4 lg:px-12 my-4'>
        <div className="flex items-center justify-between gap-4">
            <h1 className='text-xl font-semibold md:font-bold'>
                Your Podcasts
            </h1>
            <Link to="/add-podcasts" className='px-4 py-2 bg-zinc-800 text-white rounded font-semibold'>
            Add Podcasts</Link>
        </div>
        <div className="w-full my-4 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {podcast &&
                    podcast.map((items, i) =>
                    (<div key={i}>
                        <PodcastCard items={items}/>
                    </div>))}
            </div>
    </div>
  )
}

export default YourPodcasts