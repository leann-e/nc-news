import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <section>
      <nav>
        <Link to="/" className="nav_space">
          Home
        </Link>
        <Link to="/topics" className="nav_space">
          Topics
        </Link>
      </nav>
    </section>
  );
};

export default Navigation;
