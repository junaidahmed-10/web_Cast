import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PodcastCard from '../components/podcastCard/podcastCard'

function AllPodcasts() {
    const [podcast, setPodcast] = useState()

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get("http://localhost:5000/api/v1/getAllPodcasts")
            console.log(res);

            setPodcast(res.data.data)
        }
        fetch()
    }, [])

    console.log(podcast);

    return (
        <div>
            <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {podcast &&
                    podcast.map((items, i) =>
                    (<div key={i}>
                        <PodcastCard items={items}/>
                    </div>))}
            </div>
        </div>
    )
}

export default AllPodcasts