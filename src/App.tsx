import { useQuery } from "@tanstack/react-query";

function APIStatus() {
  const statusQuery = useQuery(
    ["status"], () => { return fetch("https://ui.dev/api/courses/react-query/status").then((res) => res.json()) }
  )
  if (statusQuery.status === "loading") return <div>loving...</div>
  const data = statusQuery.data;
  return <div>{JSON.stringify(data)}</div>
}

export default function App() {
  return <APIStatus />;
}
