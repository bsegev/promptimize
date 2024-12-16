import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    
    // TODO: Add email course service integration here
    // For now, just log the registration
    console.log('Course registration:', email)
    
    // You can add email course service here:
    // await registerForCourse(email)
    
    return NextResponse.json(
      { message: 'Registered successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Course registration error:', error)
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
} 