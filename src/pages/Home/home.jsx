import { Person } from "@mui/icons-material"
import "./home.css"
import TopBar from "../../companents/topBar/TopBar"
import SideBar from "../../companents/sidebar/SideBar"
import Feed from "../../companents/Feed/Feed"
import RightBar from "../../companents/rigthBar/RightBar"



const Home = () => {
  return (
   <>
   <TopBar/>
   <div className="homeContainer">
    <SideBar/>
    <Feed/>
    <RightBar/>
   </div>
   </>
  )
}

export default Home