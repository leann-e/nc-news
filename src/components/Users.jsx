import { useState, useEffect, useContext } from "react";
import { fetchAllUsers } from "../api";
import { UserContext } from "../context/user";

const Users = () => {
  const [users, setUsers] = useState([]);
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    fetchAllUsers().then((users) => {
      setUsers(users.users);
    });
  }, []);

  return (
    <>
      <h1 className="user_card--title">Users:</h1>
      <section>
        <ul className="user_card--list">
          {users.map((user) => {
            return (
              <li className="user_card" key={user.username}>
                <h3>{user.username}</h3>
                <img scr={user.avatar_url} alt={user.username}></img>
                <br />
                <br />
                <button
                  onClick={() => {
                    setCurrentUser(user);
                  }}
                  className="user_card--button"
                >
                  Select User
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Users;
