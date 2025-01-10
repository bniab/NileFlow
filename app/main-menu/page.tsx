'use client'

import { useRouter } from 'next/navigation'

export default function MainMenu() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Main Menu
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Choose your data collection activity
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <button
              onClick={() => router.push('/interview-info')}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
            >
              Interview
            </button>
            <button
              onClick={() => router.push('/focus-group-info')}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Focus Group
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

