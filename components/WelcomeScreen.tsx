'use client'

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

export default function WelcomeScreen({ projectData, onProceed, t }: { projectData: any, onProceed: () => void, t: (key: string, options?: any) => string }) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{t('welcome.title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{t('welcome.greeting', { username: projectData.username })}</p>
        <p className="mb-4">{t('welcome.projectInfo', { projectUrl: projectData.projectUrl })}</p>
        <p>{t('welcome.instructions')}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={onProceed} className="w-full">{t('welcome.proceed')}</Button>
      </CardFooter>
    </Card>
  )
}

