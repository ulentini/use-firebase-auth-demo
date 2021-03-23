import React from "react"
import { useFirebaseAuth } from "use-firebase-auth"
import { Login } from "./login"

function App() {
  const { user, loading, error, signOut } = useFirebaseAuth()

  return (
    <div className="h-screen flex flex-col items-center justify-center font-sans bg-gray-100 text-gray-600">
      {user ? (
        <div>
          <span>Logged in as {user.email}</span>
          <div className="mt-3 text-center">
            <button
              onClick={() => signOut()}
              className="bg-green-500 rounded py-2 px-4 text-lg font-semibold text-green-50 hover:bg-green-600 mt-2"
            >
              Logout
            </button>
          </div>
        </div>
      ) : loading ? (
        `Loading...`
      ) : (
        <>
          {error && (
            <div className="mb-4 text-red-600 text-base text-center">
              {error.message}
            </div>
          )}
          <Login />
        </>
      )}
    </div>
  )
}

export default App
