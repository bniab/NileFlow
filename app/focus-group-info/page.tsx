'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function FocusGroupInfo() {
  const [groupName, setGroupName] = useState('')
  const [participantCount, setParticipantCount] = useState('')
  const [notes, setNotes] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically save this information
    // For now, we'll just navigate to the guidelines screen
    router.push('/guidelines')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Focus Group Information
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="group-name" className="sr-only">
                Group Name
              </label>
              <input
                id="group-name"
                name="group-name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Group Name"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="participant-count" className="sr-only">
                Number of Participants
              </label>
              <input
                id="participant-count"
                name="participant-count"
                type="number"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Number of Participants"
                value={participantCount}
                onChange={(e) => setParticipantCount(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="notes" className="sr-only">
                Notes or Observations
              </label>
              <textarea
                id="notes"
                name="notes"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Notes or Observations"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

