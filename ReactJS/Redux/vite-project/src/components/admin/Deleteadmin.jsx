import React from 'react'
import { useDispatch } from 'react-redux';
import {clearuser} from "../store/actions"


const Deleteadmin = () => {

  const dispatch = useDispatch()

  const deleteAllUser = () =>{
      dispatch(clearuser())
  }

  return (
    <>
     <button className="btn btn-danger add-btn" onClick={deleteAllUser} >Clear All Users</button>
     
     <hr />
    </>
  )
}

export default Deleteadmin;
