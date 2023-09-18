import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"

const Feed = () => {
  return (
    <div className="Feed">
      <div className="feedWraper">
        <Share/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}

export default Feed