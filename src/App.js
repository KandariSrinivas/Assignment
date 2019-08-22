import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import Posts from './Components/posts';
import Post from './Components/post';
import PostDetail from './Components/postdetail';
import User from './Components/user';
import './App.css';
import Search from './Components/search';

function App() {
  const [route, setRoute] = useState('posts');
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(undefined);
  const handleRoute = (data) => {
    setRoute(data.route);
    setId(data.id);
  }

  useEffect(() => {
    if(!posts.length) {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => setPosts(res))
    }
  });

  return (
    <div className="App" >
      <h1> POSTBOOK </h1>
      <Search changeRoute = {handleRoute} />
      {
        route === 'posts'? <Posts postList = {posts} changeRoute = {handleRoute} />  :
        route === 'post' ? <PostDetail id={id} changeRoute = {handleRoute}  /> :
                           <User id={id} changeRoute = {handleRoute}  />
      }

    </div>
  );
}

export default App;
