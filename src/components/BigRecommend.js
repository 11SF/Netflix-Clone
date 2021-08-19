import React, {useState, useEffect} from 'react'
import axios from 'axios';
// let bg_img = "https://image.tmdb.org/t/p/original/kE3SAAQfWVkjJUZy1ohha8hy3LH.jpg"



function BigRecommend() {
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState(null);
    const [index, setIndex] = useState();

    useEffect(()=> {
        axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=d294e43e1d5e7b1384985fd18617b3bc&language=th-TH&region=TH')
        .then( res => {
            setMovies(res.data.results)
            setIndex(Math.floor(Math.random() * 10))
            setLoading(false)
        })
    },[])

    return (
        <div>
            {
                loading ? <p>Loading</p> :
                <div style={{backgroundImage: `url('https://image.tmdb.org/t/p/original${movies[index].backdrop_path}')`, backgroundSize: "cover"}}>
                    <div className="bg-gradient-to-r from-black">
                        <div className="container m-auto h-screen w-screen flex">
                            <div className="w-1/2 self-center text-left">
                                <h1 className="text-8xl font-bold text-white break-words">{movies[index].title}</h1>
                                <p className="mt-20 text-lg text-white">{movies[index].overview}</p>
                                <div className="mt-10 flex">
                                    <div>
                                        <button className="bg-white px-10 py-2 rounded-sm mr-3 flex hover:bg-gray-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 self-center" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                            </svg>
                                            <p className="ml-2 text-lg font-semibold">เล่น</p>
                                        </button>
                                    </div>
                                    <div>
                                        <button className="bg-gray-700 px-10 py-2 text-white bg-opacity-75 rounded-sm mr-3 flex hover:bg-black hover:bg-opacity-25">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="ml-2 text-lg font-semibold">ข้อมูลเพิ่มเติม</p>
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>   
                        </div>
                    <div className="h-24 w-full bg-gradient-to-b from-transparent to-black"/>
                    </div>
                    {/* <div className="h-28 w-full bg-gradient-to-b from-transparent to-black"/> */}
                </div>
            }
        </div>
    )
}

export default BigRecommend
