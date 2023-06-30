import React from "react";
import Displayadmins from "./Displayadmins";
import Chance from "chance";
import { useDispatch } from "react-redux";
import { addAdmin } from "../store/slices/Adminslice";

const chance=Chance();

const fakeapi = ()=>{
    return chance.name()
}




const Admindetails = () => {
    const dispatch = useDispatch();
    const addadmin = () =>{
        let name=fakeapi();
        dispatch(addAdmin(name));


    }
  return (
    <>
      <div className="container">
        <div style={{display:"flex",justifyContent:"space-between"}}>
          <h2>Lists of Admins</h2>
          <button className="btn btn-warning" onClick={addadmin}>Add new admin</button>
        </div>
        <Displayadmins/>
      </div>
    </>
  );
};

export default Admindetails;
