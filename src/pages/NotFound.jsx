import { Link } from "react-router";

export default function NotFound() {
    return (
        <>
        <h1> 404!</h1>
        <p>Det er vi Kede Af .... det ser ud til at du er landet et sted vi ikke havde forventet</p>
        <Link to="/">Gå til forsiden</Link>
        </>
    );
}