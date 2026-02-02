'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="m-0 p-0 flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 font-sans">
        <div className="bg-white rounded-2xl p-12 shadow-2xl text-center max-w-md">
          <h2 className="text-indigo-500 text-4xl mb-4 font-bold">
            Something went wrong!
          </h2>
          <p className="text-gray-600 mb-8">
            We encountered an unexpected error. Please try again.
          </p>
          <button 
            onClick={() => reset()}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white border-none py-3 px-8 rounded-lg text-base font-semibold cursor-pointer transition-transform hover:scale-105"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
