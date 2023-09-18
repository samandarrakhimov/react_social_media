import { Add, birthdayImg, logo, onlineFriend } from "../../constants"
import "./RightBar.css"

const RightBar = () => {
  return (
    <div className="RightBar">
      <div className="WraperRightBar">
        <div className="birthdayContainer">
          <img src={birthdayImg} alt="birthdayImg" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pole Foster</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src={Add} alt="Advartise" className="rightBarAdd" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {
            onlineFriend.map(item => {
              return (
             <li className="rightBarFriend">
            <div className="rightbarProfileImgContainer">
               <img src={item.img} alt="rightBarProfileImg" className="rightBarProfileImg" />
               <span className="rightBarOnline"> </span>
            </div>
            <span className="rightBarUername">{item.name}</span>
          </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default RightBar