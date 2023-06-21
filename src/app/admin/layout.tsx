import Link from 'next/link'
import { ReactNode } from 'react'

export default function layout ({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='back-home-container'>
        <Link href='/' className='btn-secondary'>
          Return to home
        </Link>
      </div>
      {children}
    </>
  )
}