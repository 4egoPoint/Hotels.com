
import {nanoid} from "@reduxjs/toolkit"
import "./support.scss"
import Topic from "./topic/Topic"
const helpingArr = [
   {
      id: nanoid(),
      title: "How we order your search results",
      text: "There are many travel options available through our Service and we want to make your search results as relevant as possible. At the search results page you will see our default sort order, however you can select how to sort your results and also use filter options to prioritise results based on your chosen preferences, for example price, guest review score, or other criteria. You can learn more on how we order search results here.",
   },
   {
      id: nanoid(),
      title: "Beware of email scams",
      text: "Phishing is a scam where a criminal sends an email asking for personal information, and attempts to trick the recipient into responding by clicking on a link, opening an attachment, or directly providing sensitive information. The emails can be quite convincing, since they appear to come from established businesses or organizations, and sometimes even link to legitimate-looking websites. However, the information you provide—such as a social security or credit card number—goes directly to the criminal, who can then use the information to his or her own advantage.",
   },
   {
      id: nanoid(),
      title: "Beware of phone call scams",
      text: "The scammers typically use “spoofing” technology to make the incoming telephone number falsely appear to originate from a local area code. Calls usually begin with a pre-recorded message claiming the caller is a well-known travel company, and promising the recipient has “won” some type of prize or discount off travel services. These prizes, which are also fake, can range from cash cards, trips, or credit for future travel. The phone calls can be quite convincing, since the callers take steps to hide their identity and pretend to represent established businesses or organizations. However, the information you provide (such as name and address, payment information, or a social security number) goes directly to the criminal, who can then use the information to his or her own advantage.",
   },
   {
      id: nanoid(),
      title: "Accessibility definitions",
      text: "Not all bookings are suitable for customers with reduced mobility or certain accessibility needs. Contact us to discuss which options are right for you before you complete your booking. Some accessibility features can be reserved and some not as they are either property-level features (such as path of travel) or they are property-stocked items such as equipment for the hearing impaired.",
   },
   {
      id: nanoid(),
      title: "‘Private host’ listings",
      text: "When you browse our European Union (EU) websites and book a property that’s located in the EU/European Economic Area (EEA), it may be provided by a professional host (this is generally the case) or it may be provided by a private host. If you have a professional host, that means it’s their job to offer properties for booking — it’s part of their trade, business, or profession. If the property has told us they are a ‘private host,’ that means they’re offering a property for booking, but it’s not something they do as a trade, business, or profession. These kinds of properties are not subject to the same EU consumer protection rules that apply to professional hosts. ‘Private host’ properties are marked with a badge on their description page. Unbadged properties are provided by a professional host.",
   },
   {
      id: nanoid(),
      title: "Changes or cancellations due to severe weather",
      text: "When severe weather threatens your travel destination, you might want to change or cancel your hotel or vacation rental booking. Please call us to check if your hotel or vacation rental has modified its change and cancellation policies.",
   },
]

const Support = () => {
   return (
      <div className='support'>
         <div className="support__wrapper">
            <div className="support__headrow">
               <h2>Popular Topics</h2>
               <button>Contact us!</button>
            </div>
            <div className="support__list">
               {
                  helpingArr.map((item)=> <Topic key={item.id} title={item.title} text={item.text}/>)
               }
            </div>
         </div>
      </div>
   )
}

export default Support