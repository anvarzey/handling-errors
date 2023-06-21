import { NotAdminError, NotAuthenticatedError } from "@/utils/exceptions"

const auth: 'admin' | 'user' | null = 'user'

export default function page () {

  if (!auth) throw new NotAuthenticatedError()

  if (auth !== 'admin') throw new NotAdminError()

  return (
    <main>
      <h2 className="title">Welcome to the Admin Panel</h2>
    </main>
  )
}
