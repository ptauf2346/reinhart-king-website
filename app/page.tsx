import Link from 'next/link';

export default function HomePage() {
  const AdminURL = `${process.env.POCKETBASE_URL}/_/`;

  return (
    <div>
      <h1>Home Page</h1>
      <p>Some content</p>
      <Link href={AdminURL} className="text-blue-500">Edit Website</Link>
    </div>
  )
}