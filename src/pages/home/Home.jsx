

import "./home.scss"
import Search from '../../components/search/Search'
import List from "../../components/list/List"

const Home = () => {
   return (
      <div className='home'>
         <Search />
         <List />
      </div>
   )
}

export default Home