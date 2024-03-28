

import "./policies.scss"

const Policies = () => {
   return (
      <div className='policies'>
         <div className="policies__title-box">
            <h2 className="policies__title">Fees & policies</h2>
         </div>
         <div className="policies__box">
            <div className="policies__list-item">
               <h4 className="policies__headline">Optional extras</h4>
               <ul>
                  <li><strong>Buffet breakfast</strong> is offered for an extra charge of approximately PLN 85 for adults and PLN 43 for children</li>
               </ul>
            </div>
            <div className="policies__list-item">
               <h4 className="policies__headline">Pets</h4>
               <ul>
                  <li>Service animals exempt from fees</li>
                  <li>Pets are allowed for an extra charge of PLN 140 per pet, per day</li>
               </ul>
            </div>
            <div className="policies__list-item">
               <h4 className="policies__headline">Parking</h4>
               <ul>
                  <li>Covered self-parking costs PLN 140 per day</li>
               </ul>
            </div>
            <div className="policies__p-item">
               <h4 className="policies__headline">Policies</h4>
               <p>This property is managed by a professional host. The provision of housing is linked to their trade, business or profession.</p>
               <p>The property has connecting/adjoining rooms. These are subject to availability and can be requested by contacting the property using the number on the booking confirmation.</p>
               <p>This property accepts credit cards and cash.</p>
            </div>
            <div className="policies__p-item">
               <h4 className="policies__headline">Also known as</h4>
               <p>Barceló Warsaw Powiśle Hotel</p>
               <p>Barceló Warsaw Powiśle Warsaw</p>
               <p>Barceló Warsaw Powiśle Hotel Warsaw</p>
            </div>
         </div>
      </div>
   )
}

export default Policies