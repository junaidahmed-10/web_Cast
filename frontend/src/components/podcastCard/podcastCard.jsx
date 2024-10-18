import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { playerAction } from '../../store/player'

function PodcastCard({ items }) {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    const handlePlay = (e) => {
       if (isLoggedIn) {
        e.preventDefault();
        dispatch(playerAction.setDiv())
        dispatch(playerAction.changeImage(`http://localhost:5000/${items.frontImage}`))
        dispatch(playerAction.changeSong(`http://localhost:5000/${items.audioFile}`))

       }
    }

    return (
        <div>
            <Link to={`/description/${items.id}`}
                className="border p-4 rounded flex flex-col shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="">
                    <img src={`http://localhost:5000/${items.frontImage}`} alt=""
                        className='rounded size-[42vh] object-cover' />
                </div>
                <div
                    className="mt-2 text-xl font-bold">
                    {items.title.slice(0, 20)}
                </div>
                <div
                    className="mt-2 leading-5 text-slate-500">
                    {items.description.slice(0, 50)}
                </div>
                <div
                    className="mt-2 bg-orange-100 text-orange-700 border border-orange-700 rounded-full px-4 py-2 text-center">
                    {items.category.categoryName}
                </div>
                <div
                    className="mt-2">
                    <Link to={isLoggedIn ? "#" : "/signup"}
                        className='bg-green-900 text-white px-4 py-2 rounded mt-2 flex items-center justify-center hover:bg-green-800 transition-all duration-300'
                        onClick={handlePlay}>
                        Play Now
                    </Link>
                </div>
            </Link>
        </div>
    )
}

export default PodcastCard