'use client'

import Link from "next/link"

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function error ({ error, reset }: ErrorProps) {
  return (
    <main>
      <div className="error-container">
        <h1 className='error-title'>An error has been occurred:</h1>
        <div className="error-message">{error.message}</div>
        <div className="btns-container">
          <button onClick={reset} className="btn-primary">Try again</button>
          <Link href='/' className='btn-secondary'> Return to home</Link>
        </div>
      </div>
    </main>
  )
}