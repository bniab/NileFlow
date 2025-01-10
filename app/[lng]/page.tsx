'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LoginScreen from '@/components/LoginScreen'
import WelcomeScreen from '@/components/WelcomeScreen'
import MainMenu from '@/components/MainMenu'

export default function Home({ params }: { params: { lng?: string } }) {
  const lng = params.lng || 'en' // Fallback to 'en' if lng is not provided
  const { t } = useTranslation(lng)
  const [currentScreen, setCurrentScreen] = useState('login')
  const [projectData, setProjectData] = useState(null)

  const handleLogin = (data) => {
    setProjectData(data)
    setCurrentScreen('welcome')
  }

  const handleProceed = () => {
    setCurrentScreen('mainMenu')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {currentScreen === 'login' && (
        <LoginScreen onLogin={handleLogin} lng={lng} />
      )}
      {currentScreen === 'welcome' && (
        <WelcomeScreen projectData={projectData} onProceed={handleProceed} lng={lng} />
      )}
      {currentScreen === 'mainMenu' && (
        <MainMenu lng={lng} />
      )}
    </div>
  )
}

