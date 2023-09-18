import "./post.css"
import {heart, like, logo,postImg } from "../../constants/index"
import {MoreVert} from "@mui/icons-material"
import { useState } from "react"
const Post = () => {
 const [count,SetCount] = useState(0)

 const countNumber =() => {
  SetCount(prev => prev + 1)
 }
 const countM =() => {
  SetCount(prev => prev - 1)
 }

  return (
    <div className="post">
      <div className="Wraperpost">
      <div className="postTop">
       <div className="postTopLeft">
        <img src={logo} alt="postProfileImg" className="postProfileImg"/>
        <span className="postUserName">Maria Jon</span>
        <span className="postDate">5 min ago</span>
       </div>
       <div className="postTopRight">
        <MoreVert/>
       </div>
      </div>
      <div className="postCenter">
        <span className="postText">Hey! its my first post :)</span>
         <img src={postImg} alt="postImg" className="postImg" />
      </div>
      <div className="postBottom">
      <div  className="postBottomLeft">
        <button onClick={countNumber} onDoubleClick={countM}>add</button>
        <img className="postIcon" src={like} alt="postIcon" />
        <img className="postIcon"  src={heart} alt="postIcon" />
        <span className="postLikeCounter">{count} people like it</span>
       </div>
       <div className="postBottomRight">
        <span className="postComment">heloo jo</span>
       
      </div>
      </div>
      </div>
        
    </div>
  )
}

export default Post