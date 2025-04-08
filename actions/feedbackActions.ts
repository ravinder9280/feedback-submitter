'use server';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export const addFeedback = async (formData: FormData) => {
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const feedbackMessage = formData.get('feedbackMessage') as string;

    if (!fullName || !email || !feedbackMessage) {
        throw new Error('All fields are required.');
    }

    const response = await prisma.feedback.create({
        data: {
            fullName,
            email,
            message: feedbackMessage,
        },
    });
    revalidatePath('/admin');

    return response;
};

export const getAllFeedbacks = async () => {
    const feedbacks = await prisma.feedback.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
    return feedbacks;
};