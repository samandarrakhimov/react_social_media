import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import "./topbar.css"
import {logo} from "../../constants/index"

const TopBar = () => {
  return (
    <div className='topContainer'>
      <div className="topbarLeft">
        <span className='logo'>
          Lamasocial
        </span>
      </div>
      <div className="topbarCenter">
        <div className="saerchBar">
          <Search className='searchIcon'/>
          <input type="text" placeholder='Search for friend, post or video' className='searchInput' />
        </div>
      </div>
      <div className="topbarRight">
       <div className="topbarLinks">
        <span className='topbarLink'>Homepage</span>
        <span className='topbarLink'>TimeLine</span>
       </div>
       <div className="topbarIcons">
        <div className="topbarIconItem">
          <Person/>
          <span className="topberIconBadge">
            1
          </span>
        </div>
        <div className="topbarIconItem">
          <Chat/>
          <span className="topberIconBadge">
            2
          </span>
        </div>
        <div className="topbarIconItem">
          <Notifications/>
          <span className="topberIconBadge">
            1
          </span>
        </div>
        <img src={logo} alt="logo" className='topbarImg' />
       </div>
      </div>

    </div>
  )
}

export default TopBar