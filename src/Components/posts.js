import React, {useState, useEffect} from 'react'
import Post from './post'

const Posts = ({postList, changeRoute}) => {
  return (
    <div>
      { postList.map(postData => <Post key = {postData.id} data = {postData} changeRoute = {changeRoute} /> ) }
    </div>
  );
}


export default Posts;
