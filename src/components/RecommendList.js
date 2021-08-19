import React, {useRef} from 'react'

function RecommendList({ listName, data }) {
    const ref = useRef()
    // const ref = React.createRef()
    // const scroll = (scrollOffset) => {
    //     ref.current.scrollLeft += scrollOffset;
    //     // ref.current.scrollLeft
    //   };

    return (
        <div className="py-10 ">
           <div className="container m-auto pb-4">
                <h1 className="text-white text-3xl text-left font-bold">{listName}</h1>
           </div>
           <div className="flex overflow-x-scroll scrollbar-hide h-40" ref={ref}>
                <div className="flex flex-nowrap ml-10 z-1">
                    {data.map( movie => ( 
                        <div 
                            key={movie} 
                            className="text-white w-72 h-full rounded-md bg-red-400 mr-2" 
                            style={{
                                backgroundImage:"url('https://image.tmdb.org/t/p/original/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg')", 
                                backgroundSize:"cover"}}
                        >
                            {movie}
                        </div>
                    ))}
                </div>  
    
                    <div className="absolute invisible h-40 bg-gradient-to-l from-transparent to-black flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white self-center" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="absolute right-0 h-40 bg-gradient-to-r from-transparent to-black flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white self-center" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg> 
                    </div>
                     

           </div>
           
        </div>
    )
}

export default RecommendList
