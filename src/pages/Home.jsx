import tw from "tailwind-styled-components/dist/tailwind"
import {Navbar, Dashboard, CreateUser} from "../components/"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
    </div>
  )
}

export default Home