import React, {useState, useEffect} from 'react'
import axios from 'axios'
function RecommendList({ listName, page }) {
    // const ref = useRef()
    // const ref = React.createRef()
    // const scroll = (scrollOffset) => {
    //     ref.current.scrollLeft += scrollOffset;
    //     // ref.current.scrollLeft
    //   };
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState(null);

    useEffect(()=> {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=d294e43e1d5e7b1384985fd18617b3bc&language=th-TH&region=TH&page=${page}`)
        .then( res => {
            setMovies(res.data.results)
            // console.log(res.data.results);
            setLoading(false)
        })
    },[page])

    return (
        <div className="py-10 ">
           <div className="container m-auto pb-4">
                <h1 className="text-white text-3xl text-left font-bold">{listName}</h1>
           </div>
           <div className="flex overflow-x-scroll scrollbar-hide h-60 py-10">
                <div className="flex flex-nowrap ml-10 z-1">
                    {
                        loading ? 
                        <p>Loading</p> :
                        movies.map( movie => ( 
                            <div 
                                key={movie.id} 
                                className="text-white w-72 h-full rounded-md bg-gray-800 mr-2 transform hover:scale-110 motion-reduce:transform-none hover:mx-10 flex" 
                                style={{
                                    backgroundImage:`url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`, 
                                    backgroundSize:"cover"}}
                            >
                               
                               <div className="p-2 bg-gradient-to-t from-black w-full min-h-12 self-end">
                                    <h1 className="font-semibold text-base">{movie.title}</h1> 
                               </div>
                            </div>
                        ))
                    }
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
