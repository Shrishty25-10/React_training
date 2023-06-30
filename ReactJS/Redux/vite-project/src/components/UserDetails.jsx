import React, { useCallback, useState } from "react";
import styled from "styled-components";
import DeleteAllUsers from "./DeleteAllUsers";
import { fakeapi } from "../api";
import { adduser } from "./store/slices/Userslice";
import { add } from "./store/slices/Cartslice";
import { useDispatch } from "react-redux";
import Displayuser from "./Displayuser";

const UserDetails = () => {
  const [name,setname] = useState(0);

  const dispatch = useDispatch();

  const adduserName = (payload) => {
    // setName(name => [...name,payload]);
    dispatch(adduser(payload));
  };
  const addcart = (c) => {
    dispatch(add(c));
    setname(name=>name+1);
  };
  return (
    <Wrapper>
      <button className="btn btn-primary" onClick={() => addcart(name)}>
        Add to cart
      </button>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button
            className="btn btn-warning add-btn"
            onClick={() => adduserName(fakeapi())}
          >
            Add New Users
          </button>
        </div>
        <ul>
          {/* {
           name.map((item,index) => (
            <li className="m-2" key={index}>{item}</li>
           ))
        } */}
          <Displayuser />
        </ul>

        <DeleteAllUsers />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;
  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  h3 {
    margin: 0;
  }
  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }
  .admin-subtitle {
    font-size: 2rem;
  }
  .delete-btn {
    background-color: transparent;
    border: none;
  }
  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
