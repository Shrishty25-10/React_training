import React from "react";
import { useSelector } from "react-redux";
import {MdDeleteForever} from "react-icons/all.js";
import { removeAdmin } from "../store/slices/Adminslice";
import { useDispatch } from "react-redux";
import Deleteadmin from "./Deleteadmin";


const Displayadmins = () => {
  const data = useSelector((state) => {
    return state.admins;
  });

  const dispatch = useDispatch();
   const deleteadmin = (id) => {
     dispatch(removeAdmin(id))
   }
  return (
    <>
      <div
        className="container"
      >
        {data.map((item, index) => {
          return (
            <div
              className="m-2"
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <li className="">{item}</li>
              <>
                <MdDeleteForever
                  onClick={() => deleteadmin(index)}
                  className="delete-icon" style={{  fontSize: "2.6rem",
                    color: "#f12711",
                    cursor: "pointer"}}
                />
              </>
            </div>
          );
        })}
        <Deleteadmin/>
      </div>
    </>
  );
};

export default Displayadmins;
