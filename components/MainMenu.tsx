'use client'

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function MainMenu({ t }: { t: (key: string) => string }) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{t('mainMenu.title')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full">{t('mainMenu.interview')}</Button>
        <Button className="w-full">{t('mainMenu.focusGroup')}</Button>
      </CardContent>
    </Card>
  )
}

