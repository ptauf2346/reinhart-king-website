import Link from 'next/link';

export default function HomePage() {
  const AdminURL = `${process.env.POCKETBASE_URL}/_/`;

  return (
    <div className="w-full text-center">
      <h1 className="text-center text-2xl py-2">Home Page</h1>
      <Link href={AdminURL} className="text-blue-100">Edit Website</Link>
    </div>
  )
}