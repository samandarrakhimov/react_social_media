

import { friendImg } from "../../constants"
import "./SideBar.css"
import {Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from "@mui/icons-material"
const SideBar = () => {
  
  return (
    <div className="sideBar">
      <div className="wraperSideBar">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="siadeBarIcon"/>
            <span className="sideBarListItemText">
              Feed
            </span>
          </li>
          <li className="sideBarListItem">
            <Chat className="siadeBarIcon"/>
            <span className="sideBarListItemText">
            Chats
            </span>
          </li>
          <li className="sideBarListItem">
            <PlayCircleFilledOutlined className="siadeBarIcon"/>
            <span className="sideBarListItemText">
             Videos
            </span>
          </li>
          <li className="sideBarListItem">
            <Group className="siadeBarIcon"/>
            <span className="sideBarListItemText">
            Group
            </span>
          </li>
          <li className="sideBarListItem">
            <Bookmark className="siadeBarIcon"/>
            <span className="sideBarListItemText">
            Bookmark
            </span>
          </li>
          <li className="sideBarListItem">
            <HelpOutline className="siadeBarIcon"/>
            <span className="sideBarListItemText">
            Questions
            </span>
          </li>
          <li className="sideBarListItem">
            <WorkOutline className="siadeBarIcon"/>
            <span className="sideBarListItemText">
            Jobs
            </span>
          </li>
          <li className="sideBarListItem">
            <Event className="siadeBarIcon"/>
            <span className="sideBarListItemText">
            Events
            </span>
          </li>
          <li className="sideBarListItem">
            <School className="siadeBarIcon"/>
            <span className="sideBarListItemText">
            Courses
            </span>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHR"/>
        <ul className="sideBarFrinedList">
          {
           friendImg.map(item =>{
            return (
              <i key={item.name} className="sideBarFriend">
              <img src={item.link} alt="SideBarFriendImg" className="SideBarFriendImg" />
               <span>{item.name}</span>
              </i>
            )
           })
          }
        </ul>
      </div>
    </div>
  )
}

export default SideBar