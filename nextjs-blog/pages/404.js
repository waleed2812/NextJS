import Link from "next/link";

// pages/404.js
export default function Custom404() {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <Link href={`/`}>
        <a>Go Back Home</a>
      </Link>
    </>
  );
}
