import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <section>
      <nav>
        <Link to="/" className="nav_space">
          Home
        </Link>
        <Link to="/topics" className="nav_space">
          Topics
        </Link>
        <Link to="/users" className="nav_space">
          Users
        </Link>
      </nav>
      <h3>Logged in: {currentUser.username}</h3>
    </section>
  );
};

export default Navigation;
