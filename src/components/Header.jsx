import Nav from './Nav';

export default function Header() {
  return (
    <div
      className="d-flex justify-content-between align-items-center mb-5 p-5 shadow-sm"
      style={{ backgroundColor: 'lightblue' }}
    >
      <h1 className="text-center w-100 m-5">
        Welcome to the Portfolio!!
      </h1>
      <Nav />
    </div>
  );
}
