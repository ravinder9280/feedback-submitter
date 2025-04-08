'use client'
import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { Switch } from './ui/switch'
import { Label } from '@radix-ui/react-label'

const ToggleMode = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(true)
    React.useEffect(() => {
        if (isDarkMode) {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }, [isDarkMode])

  return (
<div className="flex ite
ms-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
              )
}

export default ToggleMode