import React from "react";
import { useQuery } from "react-query";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function Main() {
  const { data, status } = useQuery("test", fetchUsers);
  return (
    <>
      <div className="">
        {status === "error" && <p>Error fetching data</p>}
        {status === "loading" && <p>Fetching data...</p>}
        {status === "success" && (
          <div>
            <h2>Lists of Users</h2>
          
            {data.map((user) => (
              <p key={user.id}>{user.name}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Main;
