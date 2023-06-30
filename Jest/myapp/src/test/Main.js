import React, { useEffect, useState } from "react";
import Form from "./Form";
import fetchUserData  from "../api/data";


function Main() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);

  const buttonclick = () =>{

    setShow(!show);

  }

  const fetchr =  async () => {
    const res =  await fetchUserData();
    setUsers(res);
    
   
  };

  useEffect(  () => {
     fetchr();
  }, []);
  return (
    <>
     <div data-testid="custom-element">
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      <button onClick={buttonclick}>
        click me
      </button>
      <div> {
          show && <Form/>
        }
      </div>
    </div>
    </>
  );
}
export default Main;

