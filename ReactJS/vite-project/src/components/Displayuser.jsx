import React from "react";
import { useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/all.js";
import { removeuser } from "./store/slices/Userslice";
import { useDispatch } from "react-redux";

const Displayuser = () => {
  const data = useSelector((state) => {
    // console.log(state.users);
    return state.users;
  });
  const dispatch = useDispatch();

  const deleteuser = (index) => {
    dispatch(removeuser(index));
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <>
            <div
              className="m-2"
              key={index}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <li className="">{item}</li>
              <>
                <MdDeleteForever
                  onClick={() => deleteuser(index)}
                  className="delete-icon"
                />
              </>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Displayuser;
