import React, {useState, useEffect} from 'react';


const User = ({id, changeRoute}) => {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(-1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if(!user.name || userId !== id) {
      fetch('https://jsonplaceholder.typicode.com/users/'+ id)
      .then(res => res.json())
      .then(res => setUser(res))
      .then(() => setUserId(id))
      .then(() => setLoading(false));
      }
  }
 );

  return (
    <div>
    { loading ? <div> LOADING... </div> :
    <div className="card">
  <h5 className="card-header"> {user.name}</h5>
  <div className="card-body">
    <h5 className="card-title">{user.username}</h5>
    <h5 className="card-title">Email: {user.email}</h5>
    <p className="card-text">Company: {user.company.name} </p>
    <p className="card-text">catchPhrase: {user.company.catchPhrase} </p>
    <p className="card-text">bs: {user.company.bs} </p>
    <p onClick = {() => changeRoute({route:'posts'})} className="btn btn-primary"> Posts </p>
  </div>
</div>
 }
 </div>
);
}

export default User;
