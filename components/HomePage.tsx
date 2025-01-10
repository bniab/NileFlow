'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LoginScreen from './LoginScreen'
import WelcomeScreen from './WelcomeScreen'
import MainMenu from './MainMenu'

export default function HomePage() {
  const [lng, setLng] = useState('en')
  const { t, i18n } = useTranslation()
  const [currentScreen, setCurrentScreen] = useState('login')
  const [projectData, setProjectData] = useState(null)

  const changeLanguage = (language: string) => {
    setLng(language)
    i18n.changeLanguage(language)
  }

  const handleLogin = (data: any) => {
    setProjectData(data)
    setCurrentScreen('welcome')
  }

  const handleProceed = () => {
    setCurrentScreen('mainMenu')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <button onClick={() => changeLanguage('en')} className="mr-2">English</button>
        <button onClick={() => changeLanguage('ar')}>العربية</button>
      </div>
      {currentScreen === 'login' && (
        <LoginScreen onLogin={handleLogin} t={t} />
      )}
      {currentScreen === 'welcome' && (
        <WelcomeScreen projectData={projectData} onProceed={handleProceed} t={t} />
      )}
      {currentScreen === 'mainMenu' && (
        <MainMenu t={t} />
      )}
    </div>
  )
}

