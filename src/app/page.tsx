import Link from "next/link"

export default function Home () {
  return (
    <main>
      <div className="container">
        <h2 className="title">Welcome to Home Page</h2>
        <Link className="btn-primary" href='/admin'>Go to Admin Panel</Link>
      </div>
    </main>
  )
}
