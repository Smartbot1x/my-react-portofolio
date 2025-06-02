import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Detail() {
  const { id } = useParams();
  console.log(id);

  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((result) => setUser(result))
      .finally(() => setIsLoading(false));
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <p>user details</p>
      <h2>{user.name}</h2>
    </>
  );
}