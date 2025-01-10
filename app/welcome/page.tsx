'use client'

import { useRouter } from 'next/navigation'

export default function WelcomeScreen() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome to Nile Flow
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Project: Data Collection in Remote Areas
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <p className="text-sm text-gray-500">
              This project aims to collect qualitative data through interviews and focus groups in remote areas. Please follow the guidelines and ensure data integrity throughout the process.
            </p>
          </div>
          <div>
            <button
              onClick={() => router.push('/main-menu')}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Proceed to Main Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

