

import "./description.scss"

const Description = ({hotelName, hotelDescription}) => {
   return (
      <div className='description'>
         <div className="description__title-box">
            <h2 className="description__title">About this property</h2>
         </div>
         <div className="description__content">
            <div className="description__w-limit">
               <h4 className="description__headline">{hotelName}</h4>
               <p className="description__text">{hotelDescription}</p>
               <h4 className="description__headline">Languages</h4>
               <p className="description__text">English, Polish, Spanish</p>
            </div>
         </div>
      </div>
   )
}

export default Description