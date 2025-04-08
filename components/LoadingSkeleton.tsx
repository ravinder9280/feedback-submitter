import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'


const LoadingSkeleton = () => {
    const skeletons = Array.from({ length: 9}, (_, index) => index + 1)
  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-6">
          {skeletons?.map((feedback,idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                    <Skeleton  className="rounded-md w-[100px] h-4" />
                    <Skeleton  className="rounded-md  h-4 w-[100px]" />

                </CardTitle>
                <CardDescription>
                    <Skeleton   className="h-4 w-[150px]" />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Skeleton  className="rounded-md w-full h-10" />
              </CardContent>
            </Card>
          ))}
        </div>  )
}

export default LoadingSkeleton