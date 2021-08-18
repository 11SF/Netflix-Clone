import React from 'react'
import netflix_logo from '../assets/netflixLogo.png'
import netflix_avatar from '../assets/Netflix-avatar.png'
function Navbar() {
    return (
       <div className="absolute w-full flex bg-gradient-to-b from-black">
           <div className="h-20 mx-auto container flex flex-wrap justify-between content-center">
                <div className="text-white flex flex-wrap">
                    {/* <h1 className="pr-8 text-red-600 text-3xl font-semibold">Netflix</h1> */}
                    <img src={netflix_logo} alt="netflix_logo" className="h-8 pr-8" />
                    <span className="px-3 m-auto">หน้าหลัก</span>
                    <span className="px-3 m-auto">รายการทีวี</span>
                    <span className="px-3 m-auto">ภาพยนต์</span>
                    <span className="px-3 m-auto">มาใหม่และกำลังฮิต</span>
                    <span className="px-3 m-auto">รายการของฉัน</span>
                    <span className="px-3 m-auto">ดูอีกครั้ง</span>
                </div>
                <div className="text-white flex justify-between content-center w-32">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg>
                    <div className="flex">
                        <img className="h-7" src={netflix_avatar} alt="avatar" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
           </div>
       </div>
    )
}

export default Navbar
