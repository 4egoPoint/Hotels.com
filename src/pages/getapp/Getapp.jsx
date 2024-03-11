

import "./getapp.scss"
import { nanoid } from '@reduxjs/toolkit'
import { MdPhoneIphone } from "react-icons/md";
import { IoMdSearch, IoMdMoon } from "react-icons/io";
import { HiCurrencyDollar } from "react-icons/hi2";

const reasonsArr = [
   {
      id: nanoid(),
      icon: <MdPhoneIphone />,
      headline: "Stay informed",
      text: "Conveniently access your itinerary without Wi-Fi",
   },
   {
      id: nanoid(),
      icon: <IoMdSearch />,
      headline: "Plan trips on the go",
      text: "Book any time, anywhere, at the last minute",
   },
   {
      id: nanoid(),
      icon: <IoMdMoon />,
      headline: "Get rewarded",
      text: "Find app-exclusive offers and perks for members",
   },
   {
      id: nanoid(),
      icon: <HiCurrencyDollar />,
      headline: "Save even more",
      text: "Receive discounts on selected hotels in the app",
   },
]

const Getapp = () => {
   return (
      <div className='getapp'>
         <div className="getapp__wrapper">
            <div className="getapp__text">
               <h2>Find your perfect somewhere with the Hotels.com app</h2>
               <p>Upgrade your travel game with our booking app. Effortless reservations, exclusive deals, and seamless planning – all in one tap. Download now for a journey that aligns with your desires. Your adventure begins here!</p>
            </div>
            <div className="getapp__QR-box">
               <div className="getapp__QR-text-side">
                  <h3>Scan the QR code and download our app</h3>
                  <h4>It's easy</h4>
                  <p>Use your mobile device to scan this QR code. You'll go straight to your app store to start downloading the app. Then you're ready to go!</p>
               </div>
               <div className="getapp__QR-code-side">
                  <img src="QR.jpg" />
                  <span>Scan the QR code</span>
               </div>
            </div>
            <div className="getapp__platforms">
               <h3>Available on iOS and Android</h3>
               <img src="adds.png" />
            </div>
            <div className="getapp__reasons">
               <h2>Reasons to download our app</h2>
               <div className="getapp__reasons-row">
                  {
                     reasonsArr.map((item) => <div className="getapp__reason">
                           {item.icon}
                           <h4>{item.headline}</h4>
                           <p>{item.text}</p>
                        </div>)
                  }
               </div>
            </div>
         </div>
      </div>
   )
}

export default Getapp