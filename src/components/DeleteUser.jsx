import tw from "tailwind-styled-components/dist/tailwind"
import {useDispatch, useSelector} from 'react-redux'
import { changeDeleteModal } from '../features/deleteuser.feature'
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

const Delete = tw.div`
w-[500px]
h-[300px]
bg-white
rounded-xl
p-[50px]
flex
flex-col
justify-evenly
`

const Heading = tw.h1`
font-bold
text-3xl
`

const Paragraph = tw.p`
font-base
text-gray-400
`

const Wrapper = tw.div`
flex
gap-x-2
mt-[10px]
`

const DeleteBtn = tw.button`
w-full
py-[5px]
bg-red-500
text-white
font-bold
rounded-lg
hover:bg-red-600
active:bg-red-700
`

const CancelBtn = tw.button`
w-full
py-[5px]
bg-slate-500
text-white
font-bold
rounded-lg
hover:bg-slate-600
active:bg-slate-700
`

const DeleteUser = ({currentUser}) => {
    const modal = useSelector((state) => state.deleteUserModal.value)
    const dispatch = useDispatch()

    const handleDelete = async (e)=>{
      await axios.delete(`https://user-management-mysql.herokuapp.com/users/delete/${currentUser.id}`).then((res)=>{
        dispatch(changeDeleteModal())
      })
    }

  return (
    <Container>
        <Layout>
            <Delete>
              <Heading>Delete User</Heading>
              <Paragraph>Are you sure you want to delete <b className = "text-black">{currentUser.firstName} {currentUser.lastName}</b> from the database?</Paragraph>
              <Wrapper>
                <CancelBtn onClick = {()=> dispatch(changeDeleteModal())}>Cancel</CancelBtn>
                <DeleteBtn onClick = {()=> handleDelete()}>Delete</DeleteBtn>
              </Wrapper>

            </Delete>
        </Layout>
    </Container>
  )
}

export default DeleteUser