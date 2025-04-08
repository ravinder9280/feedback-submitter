'use server'

import { cookies } from 'next/headers'

const ADMIN_EMAIL = 'admin@gmail.com'
const ADMIN_PASSWORD = 'admin123'

export async function login(formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    cookies().set('admin-session', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24
    })
    return { success: true }
  }

  return { success: false, error: 'Invalid credentials' }
}

export async function logout() {
  cookies().delete('admin-session')
  return { success: true }
}

export async function isAuthenticated() {
  const session = cookies().get('admin-session')
  return !!session
} 