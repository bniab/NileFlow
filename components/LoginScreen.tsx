'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginScreen({ onLogin, t }: { onLogin: (data: any) => void, t: (key: string) => string }) {
  const [projectUrl, setProjectUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!projectUrl) {
      setError(t('login.urlRequired'))
      return
    }

    try {
      new URL(projectUrl)
    } catch {
      setError(t('login.invalidUrl'))
      return
    }

    onLogin({ projectUrl, username })
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{t('login.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="projectUrl" className="text-sm font-medium">{t('login.projectUrl')}</label>
            <Input
              id="projectUrl"
              type="url"
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              required
              placeholder="https://example.com"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">{t('login.username')}</label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">{t('login.password')}</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <Button type="submit" className="w-full">{t('login.submit')}</Button>
        </form>
      </CardContent>
    </Card>
  )
}

