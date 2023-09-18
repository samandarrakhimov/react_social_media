import "./share.css"
import {EmojiEmotions, Label, PermMedia, Room} from "@mui/icons-material"
import {logo} from "../../constants/index"

const Share = () => {
  return (
    <div className="share">
      <div className="shareWraper">
      <div className="shareTop">
            <img src={logo} alt="shareProfileImg" className="shareProfileImg" />
            <input 
            placeholder="What's in your mind Safak?"
            className="shareInput"
            />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon"/>
                <span className="shareOptionsText">Photo or Video</span>
            </div>
            <div className="shareOption">
                <Label htmlColor="blue" className="shareIcon"/>
                <span className="shareOptionsText">Tag</span>
            </div>
            <div className="shareOption">
                <Room htmlColor="green" className="shareIcon"/>
                <span className="shareOptionsText">Loacation</span>
            </div>
            <div className="shareOption">
                <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                <span className="shareOptionsText">feelings</span>
            </div>
          </div>
          <button className="shareButton">share</button>
        </div>
        
      </div>
    </div>
  )
}

export default Share