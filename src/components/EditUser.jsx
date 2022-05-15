import tw from "tailwind-styled-components/dist/tailwind"
import {useDispatch, useSelector} from 'react-redux'
import { changeEditState } from '../features/edituser.feature'
import axios from "axios"

const Container = tw.section`
top-0
left-0
right-0
bottom-0
bg-black/50
fixed
`

const Layout = tw.div`
w-full
h-full
flex
justify-center
items-center
`

const Edit = tw.div`
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

const EditUser = ({currentUser}) => {
    const dispatch = useDispatch()
    const cancel = (e) =>{
        e.preventDefault()
        dispatch(changeEditState())
    }

    const handleEdit = async (e) =>{
        e.preventDefault();
        const firstName = e.target.parentElement.parentElement.firstName.value
        const lastName = e.target.parentElement.parentElement.lastName.value
        const email = e.target.parentElement.parentElement.email.value
        const role = e.target.parentElement.parentElement.role.value
        console.log(currentUser.id)

        if(firstName === "" || lastName === "" || email === "" || role === "") return
        await axios.patch(`https://user-management-mysql.herokuapp.com/users/update/${currentUser.id}`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role,
        }).then((res)=>{
            dispatch(changeEditState())
      })
    }

  return (
    <Container>
        <Layout>
            <Edit>
                <Heading>Edit user</Heading>
                <Form action = "" method = "POST">
                    <Wrapper flex = "flex">
                        <Wrapper>
                            <Label htmlFor = "first-name">First Name</Label>
                            <Input type = "text" name = "firstName" defaultValue = {currentUser.firstName}/>
                        </Wrapper>
                        <Wrapper>
                            <Label htmlFor = "last-name">Last Name</Label>
                            <Input type = "text" name = "lastName" defaultValue = {currentUser.lastName}/>
                        </Wrapper>
                    </Wrapper>

                    <Wrapper>
                        <Label htmlFor = "email">Email</Label>
                        <Input type = "text" name = "email" defaultValue = {currentUser.email}/>
                    </Wrapper>
                    <Wrapper>
                        <Label htmlFor = "role">Role</Label>
                        <Input type = "text" name = "role" defaultValue = {currentUser.role}/>
                    </Wrapper>
                    <ButtonsWrapper>
                        <Cancel onClick = {(e)=> cancel(e)}>Cancel</Cancel>
                        <Create onClick = {(e)=> handleEdit(e)}>Edit</Create>
                    </ButtonsWrapper>

                </Form>
            </Edit>
        </Layout>
    </Container>
  )
}

export default EditUser