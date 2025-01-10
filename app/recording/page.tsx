'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Recording() {
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState('')
  const [duration, setDuration] = useState(0)
  const router = useRouter()
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isRecording) {
      interval = setInterval(() => {
        setDuration((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isRecording])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorderRef.current = new MediaRecorder(stream)
      mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable)
      mediaRecorderRef.current.start()
      setIsRecording(true)
    } catch (error) {
      console.error('Error accessing the microphone', error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const handleDataAvailable = (event: BlobEvent) => {
    if (event.data.size > 0) {
      audioChunksRef.current.push(event.data)
    }
  }

  const handleStop = () => {
    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' })
    const audioUrl = URL.createObjectURL(audioBlob)
    setAudioURL(audioUrl)
    router.push('/review')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Recording
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="flex justify-center">
            <div className="text-6xl font-mono">
              {Math.floor(duration / 60).toString().padStart(2, '0')}:
              {(duration % 60).toString().padStart(2, '0')}
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="px-4 py-2 bg-green-500 text-white rounded-md"
              >
                Start
              </button>
            ) : (
              <button
                onClick={stopRecording}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Stop
              </button>
            )}
            <button
              onClick={handleStop}
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
              disabled={isRecording}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

