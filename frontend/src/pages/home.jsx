import React from 'react'

function Home() {
    return (
        <div className='bg-green-100 px-12 h-screen flex flex-col items-center justify-center'>
            <div className='w-full flex items-center justify-between gap-4'>
                <div className='w-full lg:w-5/6'>
                    <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold items-start'>
                        Create & Listen the<br />{" "}
                        <h1 className='flex items-end justify-center lg:justify-start mt-2 lg:mt-0'>
                            p
                            <span>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlZUa8uFZIYxzQEmxV_hqPIZv3R1huzazp9Q&s"
                                    alt="" className='h-13 md:h-12 lg:h-20 rounded-full' />
                            </span>
                            dcast
                        </h1>
                    </h1>
                </div>
                <div className='hidden lg:block w-1/6'>
                    <div className="px-4 py-6 border border-black font-semibold rounded-full text-center -rotate-90">
                        Scroll down</div>
                </div>
            </div>
            <div className="mt-12 w-full flex flex-col lg:flex-row items-end justify-between">
                <div className="flex flex-col items-center lg:items-start justify-center">
                    <p className='text-xl font-semibold text-center lg:text-start'>
                        Listen to the most popular platform for podcasts - {" "}
                        <b>webCast</b>
                    </p>
                    <button className=' px-6 py-4 bg-green-900 text-white font-semibold rounded-full mt-6 lg:mt-8'>
                        Login to Listen
                    </button>
                </div>
                <div className="mt-8 lg:mt-0">
                    <p className='text-zinc-600 font-semibold text-center lg:text-end'>
                        our app contains thousands of podcasts for you
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home