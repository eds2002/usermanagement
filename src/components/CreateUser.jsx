import tw from "tailwind-styled-components/dist/tailwind"
import {useDispatch, useSelector} from 'react-redux'
import { change } from "../features/adduser.feature"
import { addUsers } from "../features/users.feature"
import axios from 'axios'

const Container = tw.section`
top-0
left-0
right-0
bottom-0
bg-black/50
${(p)=> p.enable ? "fixed" : "hidden"}
`

const Layout = tw.div`
w-full
h-full
flex
justify-center
items-center
`

const AddUser = tw.div`
w-[500px]
h-[500px]
bg-white
rounded-xl
p-[50px]
relative
`

const Heading = tw.h1`
font-bold
text-3xl
`

const Form = tw.form`
`

const Wrapper = tw.div`
flex
w-full
gap-x-5
py-[10px]
${(p)=> p.flex === "flex" ? "flex": "flex-col"}
`
const Label = tw.label`
font-bold
`
const Input = tw.input`
bg-slate-200
py-[4px]
px-[10px]
outline-none
focus:ring-2
rounded
`

const ButtonsWrapper = tw.div`
absolute
bottom-0
right-0
p-[50px]
flex
gap-x-2
`
const Cancel = tw.button`
bg-gray-200
py-[5px]
px-[15px]
w-[100px]
rounded-lg
hover:bg-gray-300
active:bg-gray-400
`
const Create = tw.button`
bg-slate-500
text-white
font-bold
py-[5px]
px-[15px]
w-[100px]
rounded-lg
hover:bg-slate-600
active:bg-slate-700
`

const CreateUser = () => {
    let display = useSelector((state) => state.display.value)
    const dispatch = useDispatch()
    const cancel = (e) =>{
        e.preventDefault()
        dispatch(change())
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const firstName = e.target.firstName.value
        const lastName = e.target.lastName.value
        const email = e.target.email.value
        const role = e.target.role.value
        if(firstName === "" || lastName === "" || email === "" || role === "") return


        let date = new Date()

        // Communicating with backend
        await axios.post('https://user-management-mysql.herokuapp.com//users/post',{
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role,
            memberSince: date.toLocaleDateString(),
            status:"active",
        })
        dispatch(change())
        dispatch(addUsers([firstName, lastName,email,role]))

        // Resetting inputs
        e.target.reset()
    }
    return (
        <Container enable = {display}>
        <Layout>
            <AddUser>
                <Heading>Add a new user</Heading>
                <Form onSubmit = {(e)=> handleSubmit(e)} id = "form">
                    <Wrapper flex = "flex">
                        <Wrapper>
                            <Label htmlFor = "firstName">First Name</Label>
                            <Input type = "text" name = "firstName"/>
                        </Wrapper>
                        <Wrapper>
                            <Label htmlFor = "lastName">Last Name</Label>
                            <Input type = "text" name = "lastName"/>
                        </Wrapper>
                    </Wrapper>

                    <Wrapper>
                        <Label htmlFor = "email">Email</Label>
                        <Input type = "text" name = "email"/>
                    </Wrapper>
                    <Wrapper>
                        <Label htmlFor = "role">Role</Label>
                        <Input type = "text" name = "role"/>
                    </Wrapper>
                    <ButtonsWrapper>
                        <Cancel onClick = {(e)=> cancel(e)}>Cancel</Cancel>
                        <Create>Create</Create>
                    </ButtonsWrapper>

                </Form>
            </AddUser>
        </Layout>
    </Container>
  )
}

export default CreateUser