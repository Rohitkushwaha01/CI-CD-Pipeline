
import { useEffect, useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Checking API...");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then((data) => setMessage(data.message))
      .catch(() => setError("Could not connect to the backend."));
  }, []);

  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>CI/CD Learning Project</h1>
      <p>{error || message}</p>
      <p>React frontend + Express backend</p>
    </main>
  );
}
