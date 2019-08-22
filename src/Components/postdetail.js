import React, { useEffect, useState } from 'react';


const PostDetail = ({id, changeRoute}) => {
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let userId;
    if(!post.title) {
      fetch('https://jsonplaceholder.typicode.com/posts/'+ id)
      .then(res => res.json())
      .then(res => {
        userId = res.userId;
        setPost(res);
      })
      .then(() => {
        fetch("https://jsonplaceholder.typicode.com/comments/")
        .then(res => res.json())
        .then(res => setComments(res.filter(r => r.postId === id)))
        .then(() => {
          fetch('https://jsonplaceholder.typicode.com/users/'+ userId)
          .then(res => res.json())
          .then(res => setUser(res))
          .then(() => setLoading(false))
        })
      })
    }
  });

  return (
    <div>
    { loading ? (<div> LOADING... </div>) :
      (<div>
        <p onClick = {() => changeRoute({route:'posts'})} className="btn btn-primary">Posts</p>
  <div className="card" style={{display: 'block', marginLeft: '15%', marginRight: '15%'}}>
  <h5 className="card-header"> Title: {post.title} </h5>
  <div className="card-body">
  <p className="card-title"> {post.body} </p>
  <h5 className="card-title"> By:   {user.username} </h5>
  </div>
  </div>
  <br/>
  <br/>
  <h5> COMMENTS: </h5>
  {
    comments.map(comment => {
     return (<div className= "card" style={{display: 'block', marginLeft: '15%', marginRight: '15%'}}>
        <h5 className="card-header"> {comment.name} </h5>
        <div className="card-body">
          <p className="card-title"> Comment: {comment.body} </p>
          <h5 className="card-title"> Commenter's Email: {comment.email} </h5>
        </div>
      </div>);

    })
 }
   </div>)
  }
   </div>
 );
}

export default PostDetail;
