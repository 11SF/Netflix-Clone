import React, {useState, useEffect} from 'react'
import BigRecommend from './components/BigRecommend'
import RecommendList from './components/RecommendList'

function Home() {
    let data = [1,2,3,4,5,6,7,8,9,10]
    // const [topMovie, setTopMovie] = useState(null);

    
    return (
       <div className="">
            <BigRecommend />
            <div className="bg-gradient-to-b from-black to-gray-800">
                <RecommendList listName="ฮิตที่ Netfolk" data={data}/>
                <RecommendList listName="ดูต่อสำหรับ I am Jay" data={data}/>
                <RecommendList listName="กำลังฮิต" data={data}/>
                <RecommendList listName="ฮิตที่ Netfolk" data={data}/>
            </div>
            
       </div>
    )
}

export default Home
