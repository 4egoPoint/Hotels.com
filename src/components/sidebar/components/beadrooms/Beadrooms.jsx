

// import "./beadrooms.scss"

const Beadrooms = () => {
   return (
      <div className="sidebar__filter">
         <div className="sidebar__headline" >Number of bedrooms</div >
         <div className="sidebar__starrating">
            <button className="sidebar__starrating-item sidebar__starrating-item--active">
               <div>Studio</div>
            </button>
            <button className="sidebar__starrating-item">
               <div>1</div>
            </button>
            <button className="sidebar__starrating-item">
               <div>2</div>
            </button>
            <button className="sidebar__starrating-item">
               <div>3</div>
            </button>
            <button className="sidebar__starrating-item">
               <div>4+</div>
            </button>
         </div>
      </div >
   )
}

export default Beadrooms