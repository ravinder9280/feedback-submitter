export type Feedback = {
    id: number; // Add id
    fullName: string;
    email: string;
    message: string; // Rename feedbackMessage to message to match the database field
    createdAt: Date; // Add createdAt
    updatedAt: Date; // Add updatedAt
};