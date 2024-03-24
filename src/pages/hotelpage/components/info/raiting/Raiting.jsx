

import "./raiting.scss"

const Raiting = ({hotelReviews, hotelRating}) => {
   return (
      <div className="info__raiting">
         <div className="info__raiting-top">
            <div className="info__raiting-num">{hotelRating}</div>
            <div className="info__raiting-text">
               {
                  hotelRating < 8.5 ? "Good" : hotelRating < 9.2 ? "Wonderful" : "Exceptional"
               }
            </div>
         </div>
         <div className="info__raiting-views">{hotelReviews} reviews</div>
      </div>
   )
}

export default Raiting