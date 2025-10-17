import { useEffect } from "react";
import type { Route } from "./+types/post";
import { Form, redirect, useFetcher } from "react-router";

// Server side loading and action
// export async function loader() {}
// export async function action() {}

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

// export async function clientAction({ params }: Route.LoaderArgs) {
//   await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
//     method: "DELETE",
//   });
//   return redirect("/");
// }

export async function clientAction({ params }: Route.LoaderArgs) {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
      method: "DELETE",
    });
    return { isDeleted: true };
  } catch (error) {
    return { isDeleted: false };
  }
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();

  const isDeleted = fetcher.data?.isDeleted;

  return (
    <div>
      {!isDeleted && (
        <>
          <p>Post Title: {loaderData.title}</p>
          <p>Post Body: {loaderData.body}</p>
        </>
      )}

      {/* <Form method="delete">
        <button type="submit">Delete</button>
      </Form> */}

      <fetcher.Form method="delete">
        <button type="submit">Delete</button>
      </fetcher.Form>
    </div>
  );
}
