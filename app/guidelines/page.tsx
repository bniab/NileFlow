'use client'

import { useRouter } from 'next/navigation'

export default function Guidelines() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Interview/Focus Group Guidelines
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
              <li>Ensure a quiet environment for recording</li>
              <li>Obtain verbal consent from all participants</li>
              <li>Stick to the prepared questions, but allow for follow-ups</li>
              <li>Encourage all participants to contribute (for focus groups)</li>
              <li>Take notes on non-verbal cues and important points</li>
              <li>Be respectful and maintain confidentiality</li>
            </ul>
          </div>
          <div>
            <button
              onClick={() => router.push('/recording')}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Start Recording
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

