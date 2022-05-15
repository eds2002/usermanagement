import { Container, Layout, TextWrapper, Welcome, DashWrapper, Label, UsersDash, Button, User, Name, Email, Role, Created, Status, Buttons, Edit, Delete, NoData, Date, Id, HeaderId, Headers, HeaderFName, HeaderLName, HeaderEmail, HeaderRole, HeaderCreated, HeaderActions, HeaderStatus} from './DashboardStyles'
import {useEffect, useState} from 'react'
import { CreateUser, DeleteUser, EditUser } from '..'

import { useDispatch, useSelector } from "react-redux"
import { change } from "../../features/adduser.feature"
import { changeEditState } from '../../features/edituser.feature'
import { changeDeleteModal } from '../../features/deleteuser.feature'
import { addUsers } from "../../features/users.feature"
import axios from 'axios'


const Dashboard = () => {

  const getUsers = async () =>{
    await axios.get('https://user-management-mysql.herokuapp.com//users/').then((res)=>{
      dispatch(addUsers(res.data))
    })
  }

  let usersArray = useSelector((state)=> state.usersArray.users)

  useEffect(()=>{
    getUsers()
  },[usersArray])

  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState({
    firstName:null,
    lastName: null,
    email:null,
    role:null,
  })
  
  
  // Get values from current user

  const editUser = (e) =>{
    const parent = e.target.parentElement.parentElement
    setCurrentUser({
      firstName:parent.querySelector("#first-name").textContent,
      lastName: parent.querySelector("#last-name").textContent,
      email: parent.querySelector("#email").textContent,
      role: parent.querySelector("#role").textContent,
      id: parent.querySelector("#user-id").textContent
    })
    dispatch(changeEditState())
  }

  const deleteUser = (e) =>{
    const parent = e.target.parentElement.parentElement
    setCurrentUser({
      firstName:parent.querySelector("#first-name").textContent,
      lastName: parent.querySelector("#last-name").textContent,
      email: parent.querySelector("#email").textContent,
      role: parent.querySelector("#role").textContent,
      id: parent.querySelector("#user-id").textContent
    })
    dispatch(changeDeleteModal())
    getUsers();
    
  }
  
  const displayEditUserModal = useSelector((state) => state.editUserDisplay.display)
  const displayDeleteUserModal = useSelector((state)=> state.deleteUserModal.value)

    // setUsers(res.data)

    


  return (
    <Container>
        <Layout>
            <TextWrapper>
                <Date>05/14/2022</Date>
                <Welcome>Hi Ed, welcome back!</Welcome>
            </TextWrapper>
            <DashWrapper>
                <Label>
                    Users
                    <Button onClick = {()=>dispatch(change())}>Create User</Button>
                </Label>
                <UsersDash>
                <Headers>
                  <HeaderId>Id</HeaderId>
                  <HeaderFName>First Name</HeaderFName>
                  <HeaderLName>Last Name</HeaderLName>
                  <HeaderEmail>Email</HeaderEmail>
                  <HeaderRole>Role</HeaderRole>
                  <HeaderCreated>Created</HeaderCreated>
                  <HeaderStatus>Status</HeaderStatus>
                  <HeaderActions>Actions</HeaderActions>
                </Headers>
                {usersArray.length === 0 ? 
                  ""
                  :
                    usersArray[0].map((val)=>(
                        <User key = {val.id}>
                          <Id className = "scrollbar" id = "user-id">{val.id}</Id>
                          <Name className = "scrollbar" id = "first-name">{val.first_name}</Name>
                          <Name className = "scrollbar" id = "last-name">{val.last_name}</Name>
                          <Email className = "scrollbar"  id = "email" >{val.email}</Email>
                          <Role className = "scrollbar" id = "role">{val.role}</Role>
                          <Created className = "scrollbar" id = "created">{val.member_since}</Created>
                          <Status className = "scrollbar" id = "status" active = {val.status === "active" ? "true" : "false"}>{val.status}</Status>
                          <Buttons>
                            <Edit onClick = {(e)=> editUser(e)}>Edit</Edit>
                            <Delete onClick = {(e)=> deleteUser(e)}>Delete</Delete>
                          </Buttons>
                        </User>
                      )
                    )
                }
                    {usersArray.length === 0 || usersArray[0].length === 0 &&
                      <NoData>
                        No users to display.
                      </NoData>
                    }
                </UsersDash>
            </DashWrapper>
        </Layout>
        <CreateUser/>
        {displayEditUserModal && (
          <EditUser currentUser = {currentUser}/>
        )}
        {displayDeleteUserModal && (
          <DeleteUser currentUser = {currentUser}/>
        )}
    </Container>
  )
}

export default Dashboard