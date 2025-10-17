import { useEffect } from "react";
import type { Route } from "./+types/post";

export async function clientLoader({ params }: Route.LoaderArgs) {
  // not server side loading
  const postId = params.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return await res.json();
}

export function HydrateFallback() {
  // for client loader
  return <p>Loading Game...</p>;
}

export async function action() {}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <p>Post Title: {loaderData.title}</p>
      <p>Post Body: {loaderData.body}</p>
    </div>
  );
}
