import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";
import { FaTwitter } from "react-icons/fa";


const Post=({post})=>{
  const { likes=0, dislikes=0 } = post.reactions || {};

  const {deletePost}=useContext(PostList);

    return(
      <div className="" style={{alignItems:"center"}}>
        <div className="card mx-auto mt-2 p-2" style={{width: "18rem",}}>
        <FaTwitter />
        <div className="card-body" style={{width: "18rem",}}>
          <h5 className="card-title">{post.title}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)} }>
          <MdDelete />

  </span></h5>
          <p className="card-text">{post.body}</p>
          {post.tags && post.tags.length > 0 ? (
  post.tags.map((tag) => (
    <span key={tag} className="badge text-bg-primary hashtag reactions">
      {tag}
    </span>
  ))
) : (
  <p>No tags available</p>
)}
          {/* {post.tags.map((tag)=><span key={tag} className="badge text-bg-primary hashtag reactions">{tag}</span>)} */}
          <div className="alert alert-success" role="alert">
  This Post has {likes} likes and {dislikes} dislikes.
</div>
          
          
        </div>
      </div>
      </div>);
}

export default Post;