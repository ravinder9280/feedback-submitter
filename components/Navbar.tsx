import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import ToggleMode from './ToggleMode'

const NavBar = () => {
  return (
    <header className="fixed top-0 w-full border-b  bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
              <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href={'/'}
                className='text-2xl font-bold rounded-md p-2 hover:bg-gray-200/10 bg:text-primary-foreground'
                >Feedback</Link>

                <div className='flex items-center space-x-4'>
                <ToggleMode/>
                <Button  asChild >
                  <Link href={'/admin'}>
                  
                    Admin
                  </Link>
                </Button>
                </div>
                

                </nav>

          </header>
  )
}

export default NavBar