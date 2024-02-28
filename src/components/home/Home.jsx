

import "./home.scss"
import Search from '../search/Search'
import List from "../list/List"

const Home = () => {
   return (
      <div className='home'>
         <Search />
         <List />
      </div>
   )
}

export default Home