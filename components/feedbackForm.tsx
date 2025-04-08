'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { addFeedback } from '@/actions/feedbackActions'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'

type FormData = {
  fullName: string
  email: string
  feedbackMessage: string
}

const FeedbackForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const formData = new FormData()
      formData.append('fullName', data.fullName)
      formData.append('email', data.email)
      formData.append('feedbackMessage', data.feedbackMessage)
      return addFeedback(formData)
    },
    onSuccess: () => {
      reset()
      toast.success('Feedback submitted successfully!')
    },
    onError: (error) => {
      toast.error('Failed to submit feedback. Please try again.')
      console.error('Error submitting feedback:', error)
    }
  })

  const onSubmit = (data: FormData) => {
    mutation.mutate(data)
  }

  return (
    <Card className='w-[400px]'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader className='text-center'>
          <CardTitle>Share Your Feedback</CardTitle>
          <CardDescription>Help us improve! Let us know your thoughts and suggestions</CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
          <div className='flex flex-col space-y-2'>
            <Label htmlFor="name">Full Name</Label>
            <div>
              <Input
                type="text"
                id='name'
                className=''
                placeholder='John Doe'
                {...register('fullName', { required: 'Name is required' })}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            <Label htmlFor="email">Email</Label>
            <div>
              <Input
                type="email"
                id='email'
                className=''
                placeholder='demo@gmail.com'
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>
          <div className='flex flex-col space-y-2'>
            <Label htmlFor="feedbackMessage">Feedback</Label>
            <div>
              <Textarea
                id="feedbackMessage"
                className=""
                rows={5}
                placeholder="Feedback Message"
                {...register('feedbackMessage', { required: 'Feedback message is required' })}
              />
              {errors.feedbackMessage && <p className="text-red-500 text-sm">{errors.feedbackMessage.message}</p>}
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Button className='w-full' disabled={mutation.isPending}>
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default FeedbackForm