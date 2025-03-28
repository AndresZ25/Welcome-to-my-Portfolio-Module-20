import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {
  return (
    <footer
      className="w-100 py-3"
      style={{
        backgroundColor: 'lightblue',
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <div className="container d-flex justify-content-end">
        <Link key={1} to="https://github.com/AndresZ25" className="p-3">
          <i className="bi bi-github" style={{ fontSize: '40px' }}></i>
        </Link>
        <Link key={2} to="/contact" className="p-3">
          <i className="bi bi-envelope" style={{ fontSize: '40px' }}></i>
        </Link>
      </div>
    </footer>
  );
}
