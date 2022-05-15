import tw from "tailwind-styled-components/dist/tailwind"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faGears, faCircle } from '@fortawesome/free-solid-svg-icons'



const Container = tw.section`
w-[100vw]
h-full
relative
bg-gray-100
`

const Layout = tw.div`
max-w-[1280px]
mx-auto
px-[25px]
flex
justify-between
items-center
h-[10vh]
text-center
`

const User = tw.nav`
flex
px-[25px]
items-center
justify-center
gap-x-5
`

const Logo = tw.h1`
text-xl
font-bold
my-[35px]
`


const Image = tw.div`
w-[40px]
h-[40px]
rounded-full
bg-gray-400
`

const Text = tw.p`
text-gray-500
hover:text-slate-800
cursor-pointer
transition
`


const Navbar = () => {
  return (
    <Container>
        <Layout>
            <Logo>User SyS</Logo>
        </Layout>
    </Container>
  )
}

export default Navbar