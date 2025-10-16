// app/routes/dog.tsx
import { type LoaderFunctionArgs } from "react-router";
import { useLoaderData, Link } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();

  return {
    dogImage: data.message,
  };
}

type LoaderData = Awaited<ReturnType<typeof loader>>;

export function meta({ data }: { data: LoaderData }) {
  return [
    { title: "Random Dog Image" },
    { name: "description", content: "Check out this random dog image" },
    { property: "og:image", content: data?.dogImage || "" },
  ];
}

export default function Dog() {
  const data = useLoaderData<LoaderData>();

  return (
    <div>
      <h1>Random Dog</h1>
      <img src={data.dogImage} alt="Random dog" />
      <Link to="/dog">Get another dog</Link>
    </div>
  );
}
