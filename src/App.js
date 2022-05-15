import tw from 'tailwind-styled-components'
import axios from 'axios'
import { Home } from './pages'

import { useEffect, useState } from 'react';

const Container = tw.section`
w-full
h-full
`



function App() {

  // const [users, setUsers] = useState([])

  // const data = () =>{
  //   axios.get("http://localhost:4002/users")
  //   .then(res =>{
  //     setUsers(res.data)
  //   })
  // }
  
  // useEffect(()=>{
  //   data()
  // },[])

  return (
    <Home/>
  );
}

export default App;
