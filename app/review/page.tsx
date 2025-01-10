'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Review() {
  const [audioURL, setAudioURL] = useState('')
  const router = useRouter()

  useEffect(() => {
    // In a real app, you'd retrieve the audio URL from a state management solution or API
    // For this example, we'll just use a placeholder
    setAudioURL('path/to/audio/file.webm')
  }, [])

  const handleProceed = () => {
    router.push('/upload')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Review Recording
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          {audioURL && (
            <audio controls src={audioURL} className="w-full">
              Your browser does not support the audio element.
            </audio>
          )}
          <div>
            <button
              onClick={handleProceed}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

