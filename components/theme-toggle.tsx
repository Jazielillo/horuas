'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

import { Moon, Sun } from 'lucide-react'

import { Button } from './ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Prevent hydration mismatch
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return <></>
  }

  const isDark = theme === 'dark'

  return (
    <Button
      onClick={() => setTheme(old => (old === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle theme"
      variant="ghost"
      className="text-inherit!"
    >
      {isDark ? <Moon size={16} /> : <Sun size={16} />}
    </Button>
  )
}
