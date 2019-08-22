import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const Post = ({data, changeRoute}) => {
  const [userId, setUserId] = useState(data.userId);
  const [name,setName] = useState('username');
  const [postId, setPostId] = useState(data.id);
  const [postHovered, setHover] = useState(false);       // Checck
  const toggleHover = () => setHover(!postHovered);
  useEffect(() => {
    if(name === 'username') {
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
    .then(res => res.json())
    .then(res => setName(res.name))
   }
 });


  const styles = {
    opacity: '0.5',
  }

  return (
    <div style ={{}}>
    <div className="card" style={{display: 'block', marginLeft: '15%', marginRight: '15%'}}>
    <div className="card-body">
      { postHovered ?
         <h5 className="card-title" onClick = {() => changeRoute({route: 'post', id: postId})} style ={styles} onMouseEnter={toggleHover} onMouseLeave={toggleHover} >{data.title} </h5> :
         <h5 className="card-title"  onMouseEnter={toggleHover} onMouseLeave={toggleHover} > {data.title} </h5>
       }

       <i onClick = {() => changeRoute({route: 'user', id: userId})}> {name} </i>


      <p className="card-text">{data.body}</p>

    </div>
  </div>
  </div>
  );
}

export default Post;
