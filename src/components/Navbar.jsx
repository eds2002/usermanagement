import tw from "tailwind-styled-components/dist/tailwind"



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


const Logo = tw.h1`
text-xl
font-bold
my-[35px]
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