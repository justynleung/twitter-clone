'use client'
import LeftNav from '&/components/left-nav/index';
import TweetFeed from '&/components/main-feed';
import RightNav from '&/components/right-nav/index';
import { signIn, signOut, useSession } from "next-auth/react"
export default function App() {
  const { data: session, status } = useSession()
  const loading = status === 'loading'

  return (
    <>
      {!session && (
        <>
          <p>landing page</p>
          <a
            href={`/auth/signin`}
            onClick={(e) => {
              e.preventDefault()
              signIn()
            }}
          >
            Sign in
          </a>
        </>
      )}
    </>
  )
}

