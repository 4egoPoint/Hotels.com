

import "./footer.scss"
const destinationsArr = [
   "Hotels in Dublin",  "Hotels in Galway",  "Hotels in Killarney",
   "Hotels in London",  "Hotels in Cork",  "Hotels in New York",
   "Hotels in Amsterdam",  "Hotels in Barcelona",  "Hotels in Paris",
   "Hotels in Belfast",  "Hotels in Lisabon",  "Hotels in Edinburgh",
   "Hotels in Rome",  "Hotels in Dubai",  "Hotels in Limerick",
   "Hotels in Albufeira","Hotels in Berlin",  "Hotels in Madrid",
   "Hotels in Prague",  "Hotels in Waterford",  "Hotels in Killkenny",
   "Hotels in Orlando",  "Hotels in Malaga",  "Hotels in Vienna",
]
const countriesArr = [
   "Hotels in Ireland",  "Hotels in Malta",  "Hotels in Spain",
   "Hotels in Portugal",  "Hotels in Maldives",  "Hotels in Singapore",
   "Hotels in Lanzarote",  "Hotels in Tenerife",  "Hotels in Mayorca Island",
   "Hotels in Gran Canaria",  "Hotels in Country Mayo",  "Hotels in Fuerteventura",

]
const supportArr = [
   "Your bookings",  "FAQs",  "Contact us", "Review a property",
]
const suppliersArr = [
   "Affiliate with us",  "Expedia Partner Solutions",  "Promote with us",  "Travel Agents",
]
const policiesArr = [
   "Terms & Conditions",  "Vrbo Terms & Conditions",  "Privacy",
   "Cookies",  "Legal information / Contuct us",  "Content guidelines",
]
const otherArr = [
   "About us",  "Careers",  "Travel Guides",
]

const Footer = () => {
   return (
      <div className='footer'>
         <div className="footer__wrapper">
            <div className="footer__title"><img src="expedia.svg"/></div>
            <div className="footer__box">
               <div className="footer__column">
                  <div className="footer__subtitle">Top destinations</div>
                  {
                     destinationsArr.map(i=><div className="footer__item">{i}</div>)
                  }
               </div>
               <div className="footer__column">
                  <div className="footer__subtitle">Top countries & regions</div>
                  {
                     countriesArr.map(i=><div className="footer__item">{i}</div>)
                  }
               </div>
               <div className="footer__column">
                  <div className="footer__subtitle">Support & FAQs</div>
                  {
                     supportArr.map(i=><div className="footer__item">{i}</div>)
                  }
               </div>
               <div className="footer__column">
                  <div className="footer__subtitle">For suppliers, affiliates and the media</div>
                  {
                     suppliersArr.map(i=><div className="footer__item">{i}</div>)
                  }
               </div>
               <div className="footer__column">
                  <div className="footer__subtitle">Polocies</div>
                  {
                     policiesArr.map(i=><div className="footer__item">{i}</div>)
                  }
               </div>
               <div className="footer__column">
                  <div className="footer__subtitle">Other information</div>
                  {
                     otherArr.map(i=><div className="footer__item">{i}</div>)
                  }
               </div>
            </div>
            <div className="footer__text">
               <p>* Some hotels require you to cancel more than 24 hours before check-in. Details on site.</p>
               <p>© 2024 Hotels.com is an Expedia Group company. All rights reserved.</p>
               <p>Hotels.com and the Hotels.com logo are trademarks or registered trademarks of Hotels.com, LP in the United States and/or other countries. All other trademarks are the property of their respective owners.</p>
            </div>
         </div>
      </div>
   )
} 

export default Footer