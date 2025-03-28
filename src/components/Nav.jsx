import { Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  return (
    <div
      style={{
        backgroundColor: 'lightblue',
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <Navbar
        links={[
          <Link key={1} className="nav-link custom-link" to="/">

            Home
          </Link>,
          <Link key={2} className="nav-link custom-link" to="/resume">
            Resume
          </Link>,
          <Link key={3} className="nav-link custom-link" to="/portfolio">
            Portfolio
          </Link>,
          <Link key={4} className="nav-link custom-link" to="/contact">
            Contact
          </Link>,
        ]}
      />
    </div>
  );
}
