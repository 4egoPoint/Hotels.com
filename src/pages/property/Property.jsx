

import "./property.scss"

const Property = () => {
   return (
      <div className='property'>
         <div className="property__header">
            <div className="property__header-wrapper">
               <div className="property__logo"><img src="expedia.svg" /></div>
            </div>
         </div>

         <div className="property__wrapper">
            <h2>Bring the right guests within reach</h2>
            <p>Connect with millions of people whose purpose, taste and budget make your property the perfect place to stay.</p>
            <div className="property__row">
               <div className="property__item">
                  <img src="https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/icons/icon-world-travelers.png" />
                  <h3>Access a world of travelers</h3>
                  <p>From long-range planners to last-minute bookers, bring travelers to your door from around the world.</p>
               </div>
               <div className="property__item">
                  <img src="https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/icons/icon-ideal-guests.png" />
                  <h3>Attract your ideal guests</h3>
                  <p>Book your ideal guests—travelers who delight in what you provide and want to return again and again.</p>
               </div>
               <div className="property__item">
                  <img src="https://headless.expediagroup.com/content/dam/marketing/headless/site-assets/icons/icons-grow-business.png" />
                  <h3>Grow your business</h3>
                  <p>Make decisions based on real-time data, be more competitive & help increase visibility and bookings.</p>
               </div>
            </div>
         </div>
      </div >
   )
}

export default Property