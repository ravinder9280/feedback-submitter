import FeedbackForm from '@/components/feedbackForm'
import React from 'react'

const page = () => {
  return (
    <div className=' h-[calc(100vh-4rem)] flex items-center p-2 sm:p-0 justify-center bg-background' >

      <FeedbackForm/>
    </div>
  )
}

export default page