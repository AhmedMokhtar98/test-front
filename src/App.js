import react, {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
function App() {
const[data, setData]=useState([])

useEffect(() => {
  axios.get("https://app-158509c3-d47f-4d6a-a6b0-22a08cbd0308.cleverapps.io/api/users-test")
  .then((response) =>{
    console.log(response);
      const arr = response.data
      setData(arr) 
  })
}, [])

  return (
    <div className="App">
        {data.map((item,index)=>(
          <>
          <div>{item.first_name}</div>
          <img src={`https://app-158509c3-d47f-4d6a-a6b0-22a08cbd0308.cleverapps.io/public/users/${item.userid}/${item.profile_photo}`} style={{width:'150px'}}/>
          </>
        ))}
    </div>
  );
}

export default App;
