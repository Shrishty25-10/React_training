import React from 'react'
import { useDispatch } from 'react-redux';
import { clearuser } from './store/slices/Userslice';


const DeleteAllUsers = () => {

  const dispatch = useDispatch()

  const deleteAllUser = () =>{
    dispatch(clearuser());

  }

  return (
    <>
     <button className="btn btn-danger add-btn" onClick={deleteAllUser} >Clear All Users</button>
     <hr />
    </>
  )
}

export default DeleteAllUsers;
