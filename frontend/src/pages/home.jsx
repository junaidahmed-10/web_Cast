import React from 'react'

function Home() {
    return (
        <div className='bg-green-100 px-12 h-screen flex flex-col items-center justify-center'>
            <div className='w-full flex items-center justify-between gap-4'>
                <div className='w-5/6'>
                    <h1 className='text-6xl font-bold items-start'>
                        Create & Listen the<br />{" "}
                        <h1 className='flex items-end'>
                            p
                            <span>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZUa8uFZIYxzQEmxV_hqPIZv3R1huzazp9Q&s"
                                    alt="" className='h-12 rounded-full' />
                            </span>
                            dcast
                        </h1>
                    </h1>
                </div>
                <div className='w-1/6'>
                    <div className="px-4 py-6 border border-black font-semibold rounded-full text-center -rotate-90">Scroll down</div>
                </div>
            </div>
            <div className="mt-12 w-full flex items-center justify-between">
                <div className=""><p className='text-xl font-semibold'>
                    Listen to the most popular platform for podcasts - {" "}
                    <b>webCast</b></p>
                    <button className='mt-4 px-3 py-4 bg-green-900 text-white font-semibold rounded-full'>
                        Login to Listen</button>
                </div>
                <div className="">
                    <p className='text-zinc-600 font-semibold'>our app contains thousands of podcasts for you</p>
                </div>
            </div>
        </div>
    )
}

export default Home