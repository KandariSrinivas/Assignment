import React, {useEffect, useState} from 'react';

const Search = ({changeRoute}) => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [hover, setHover] = useState(false);
  const [filteredUsers, setFiltered] = useState([]);
  const toggleHover = () => setHover(!hover);
  const handleSearch = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
    event.target.value==='' ? setFiltered([]) : setFiltered(users.filter(user => user.name.startsWith(event.target.value.toLowerCase())))
  }


  useEffect(() => {
    !users.length  && fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => res.map(user =>  {
        return {name: user.name.toLowerCase(), id: user.id}
      })
      )
      .then(res => setUsers(res))
  })


  return (
    <div style={{ }}>
    <form style = {{display:'flex', flexDirection: 'row',marginBottom: '0px', paddingLeft: "30%"}}>
<div class="form-group" style = {{marginBottom: '0px'}}>
  <input type="text" style={{height: "40px", width: "400px",}} onChange={handleSearch} class="form-control" id="search" placeholder="Search Users"  />
</div>
 <button type="submit" style ={{height: "40px"}} class="btn btn-primary" >Submit</button>
</form>

{
  filteredUsers.length !==0 ? (
    <div style={{ boxShadow: '0 8px 6px -6px black', borderBottomRightRadius: '8px', borderBottomLeftRadius: '8px', width: '400px', marginTop:'0px', marginLeft: "30%", zIndex:'999', position:'absolute', backgroundColor: '#ffffff'}}>
      <ul style={{listStyle: 'none'}}>
        {  filteredUsers.map(user => <li onClick= {() => {changeRoute({route:'user', id:user.id}); setFiltered([])}}> <b> {user.name} </b> </li>) }
      </ul>
    </div>

  ) : (<br/>)
}

    </div>
  )
}

export default Search;
