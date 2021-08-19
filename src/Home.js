import React, {useState, useEffect} from 'react'
import BigRecommend from './components/BigRecommend'
import RecommendList from './components/RecommendList'
import axios from 'axios'

function Home() {
    let data = [1,2,3,4,5,6,7,8,9,10]
    const [loading, setLoading] = useState(true)
    const [topMovie, setTopMovie] = useState([]);

    useEffect(()=> {
        axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=d294e43e1d5e7b1384985fd18617b3bc&language=th-TH&region=TH')
        .then( res => {
            setTopMovie(res.data.results)
            setLoading(false)
        })
    },[])
    
    return (
       <div>
           {
                loading ? <p>Loading</p> :
                <div>
                    <BigRecommend movie={topMovie[0]}/>
                    <div className="bg-black">
                        <RecommendList listName="ฮิตที่ Netfolk" data={data}/>
                        <RecommendList listName="ดูต่อสำหรับ I am Jay" data={data}/>
                        <RecommendList listName="กำลังฮิต" data={data}/>
                        <RecommendList listName="ฮิตที่ Netfolk" data={data}/>
                    </div>  
                </div> 
           }
       </div>
    )
}

export default Home
