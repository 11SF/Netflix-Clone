import React from 'react'

function RecommendList({ listName, data }) {
    return (
        <div className="py-10 ">
           <div className="container m-auto pb-4">
                <h1 className="text-white text-3xl text-left font-bold">{listName}</h1>
           </div>
           <div className="flex overflow-x-scroll scrollbar-hide">
               <div className="flex flex-nowrap ml-10">
                    {data.map( movie => ( 
                        <div key={movie} className="text-white w-72 h-40 rounded-md bg-red-400 mr-2" style={{backgroundImage:"url('https://image.tmdb.org/t/p/original/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg')", backgroundSize:"cover"}}>{movie}</div>
                    ))}
               </div>    
           </div>
           
        </div>
    )
}

export default RecommendList
