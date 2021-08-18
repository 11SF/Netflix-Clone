import React from 'react'
// let bg_img = "https://image.tmdb.org/t/p/original/kE3SAAQfWVkjJUZy1ohha8hy3LH.jpg"



function BigRecommend() {
    return (
        <div style={{backgroundImage: "url('https://image.tmdb.org/t/p/original/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg')", backgroundSize: "cover"}}>
            <div className="bg-gradient-to-r from-black">
                <div className="container m-auto h-screen w-screen flex">
                    <div className="w-1/2 self-center text-left">
                        <h1 className="text-8xl font-bold text-white">Luca</h1>
                        <p className="mt-20 text-lg text-white">เรื่องเกิดขึ้นในเมืองริมทะเลอันสวยงามชายฝั่งอิตาเลียน ริเวียร่า ภาพยนตร์ออริจินัลจากดิสนีย์ พิกซาร์ “ลูก้า” คือเรื่องราวของการก้าวผ่านวัยของเด็กชายคนหนึ่งกับประสบการณ์ในหน้าร้อนที่ยากจะลืม ที่เต็มไปด้วยเจลาโต้ พาสต้า และการขี่สกู๊ตเตอร์แบบไม่รู้จบ ลูก้า (พากย์เสียงโดย เจค็อบ เทรมเบลย์)ได้ออกผจญภัยไปกับเพื่อนซี้คนใหม่ที่เพิ่งได้เจอ อัลเบอร์โต้ (พากย์เสียงโดย แจ็ค ดีแลน เกรเซอร์) แต่ความสนุกทั้งหลายก็ถูกขัดขวางโดยความลับที่ถูกซ่อนไว้ ว่าพวกเขาคือมอนสเตอร์ใต้ทะเลลึกจากโลก</p>
                        <div className="mt-10 flex">
                            <div>
                                <button className="bg-white px-10 py-2 rounded-sm mr-3 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 self-center" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                                    </svg>
                                    <p className="ml-2 text-lg font-semibold">เล่น</p>
                                </button>
                            </div>
                            <div>
                                <button className="bg-gray-700 px-10 py-2 text-white bg-opacity-75 rounded-sm mr-3 flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="ml-2 text-lg font-semibold">ข้อมูลเพิ่มเติม</p>
                                </button>
                            </div>
                            
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default BigRecommend
