import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost=()=>{

  const {addPost}=useContext(PostList);

  const userIdElement=useRef();
  const postTitleElement=useRef();
  const postBodyElement=useRef();
  const reactionsElement=useRef();
  const tagsElement=useRef();

  const handleSubmit=(event)=>{
    event.preventDefault();

    const userId=userIdElement.current.value;
    const postTitle=postTitleElement.current.value;
    const postBody=postBodyElement.current.value;
    const reactions=reactionsElement.current.value;
    const tags=tagsElement.current.value.split(" ");

    userIdElement.current.value="";
    postTitleElement.current.value="";
    postBodyElement.current.value="";
    reactionsElement.current.value="";
    tagsElement.current.value="";
    // alert("Posted");
    fetch("https://dummyjson.com/posts/add",{
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags, 
      }),
    })
    .then((res)=>res.json())
    .then(post=>{
      // console.log(post);
      addPost(post)
      })


    addPost(userId, postTitle, postBody, reactions, tags);
   

  };



    return(
        <form className="create-post" onSubmit={handleSubmit}>

<div className="mb-3">
    <label htmlFor="userId" className="form-label"></label>
    Enter your userid
    <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Enter your user Id"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label"></label>
    Post Title
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="how are you feeling today"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label"></label>
    Post Content
    <textarea type="text" ref={postBodyElement} className="form-control" id="title" placeholder="tell us more about it"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label"></label>
    Enter No of reactions
    <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="no of reactions" readOnly/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="for tags" className="form-label"></label>
    Enter your tags here
    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="please enter tags using space"/>
    
  </div>
 
  <button type="submit" className="btn btn-primary">Post</button>
</form>
    );
}

export default CreatePost;