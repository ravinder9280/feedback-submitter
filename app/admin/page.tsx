'use client'
import { Feedback } from '@/types/feedbackTypes'; // Import the Feedback type

import { useQuery } from '@tanstack/react-query'
import { getAllFeedbacks } from '@/actions/feedbackActions'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { logout } from '@/actions/authActions'
import { toast } from 'sonner'
import { format } from 'date-fns'
import LoadingSkeleton from '@/components/LoadingSkeleton'

export default function AdminDashboard() {
  const router = useRouter()

  const { data: feedbacks, isError, isLoading } = useQuery<Feedback[]>({
    queryKey: ['feedbacks'],
    queryFn: async () => {
      const response = await getAllFeedbacks()
      return response
    },
  })

  const handleLogout = async () => {
    try {
      await logout()
      toast.success('Logged out successfully')
      router.push('/admin/login')
    } catch {
      toast.error('Failed to logout')
    }
  }

 
  

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500">Error loading feedbacks</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        {isLoading?<LoadingSkeleton/>:

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks?.map((feedback) => (
            <Card key={feedback.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span>{feedback.fullName}</span>
                  <span className="text-sm text-muted-foreground">
                    {format(new Date(feedback.createdAt), 'MMM d, yyyy')}
                  </span>
                </CardTitle>
                <CardDescription>{feedback.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feedback.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        }

        {feedbacks?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No feedbacks yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}