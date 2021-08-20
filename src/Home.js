import React from 'react'
import BigRecommend from './components/BigRecommend'
import RecommendList from './components/RecommendList'
// import axios from 'axios'

function Home() {
    // let data = [1,2,3,4,5,6,7,8,9,10]
    
    return (
                <div>
                    <BigRecommend />
                    <div className="bg-black">
                        <RecommendList listName="ฮิตที่ Netfolk" page={1}/>
                        <RecommendList listName="ดูต่อสำหรับ I am Jay" page={2}/>
                        <RecommendList listName="กำลังฮิต" page={3}/>
                        <RecommendList listName="ฮิตที่ Netfolk" page={4}/>
                    </div>  
                </div> 
    )
}

export default Home
