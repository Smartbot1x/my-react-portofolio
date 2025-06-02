import { Link, NavLink } from "react-router";


export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/about">Go to about!</Link>
    </>
  );
}