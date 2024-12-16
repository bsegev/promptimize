import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    
    // TODO: Add newsletter service integration here
    // For now, just log the subscription
    console.log('Newsletter subscription:', email)
    
    // You can add newsletter service here:
    // await subscribeToNewsletter(email)
    
    return NextResponse.json(
      { message: 'Subscribed successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { message: 'Something went wrong' },
      { status: 500 }
    )
  }
} 