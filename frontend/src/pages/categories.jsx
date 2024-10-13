import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {

    const cat = [
        {
            name : "comedy",
            color : "bg-purple-200",
            to : "/categories/comedy",
            img : "https://i.ytimg.com/vi/FYU6OKRwqj0/maxresdefault.jpg"
        },
        {
            name : "bussiness",
            color : "bg-green-200",
            to : "/categories/bussiness",
            img : "https://i.ytimg.com/vi/hV3krEF9kWM/maxresdefault.jpg"
        },
        {
            name : "Education",
            color : "bg-red-200",
            to : "/categories/Education",
            img : "https://i.ytimg.com/vi/Q8uXQVO9lJA/hqdefault.jpg"
        },
        {
            name : "Hobbies",
            color : "bg-zinc-200",
            to : "/categories/Hobbies",
            img : "https://i.ytimg.com/vi/1m8BcPV4De4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCy3jdWQn6rmhlAjyTqUMN5uiONwQ"
        },
        {
            name : "Government",
            color : "bg-indigo-200",
            to : "/categories/Government",
            img : "https://i.ytimg.com/vi/2bQaBVCJTP8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNlBxboC3hZOE3TR_y3-Zm6OURTg"
        }
    ]
  return (
    <div className='h-screen lg:h-[78vh]'>
        <div className="px-4 lg:px-12 py-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cat.map((items, i) => (<Link to={items.to} key={i}
                    className={`rounded px-8 py-4 text-xl font-semibold ${items.color} hover:scale-105 shadow-xl transition-all duration-300 relative h-[22vh] overflow-hidden -z-10`}>
                        <div className="">{items.name}</div>
                        <div className="w-[100%] flex items-center justify-end absolute -bottom-2 -right-2">
                            <img src={items.img} alt="category" className='rounded rotate-12 h-[15vh] md:h-[17vh] lg:h-[18vh]' />
                        </div>
                    </Link>)
                )
            }
        </div>
    </div>
  )
}

export default Categories