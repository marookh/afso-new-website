import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from the AFSO website contact form.
    `.trim()

    // In a production environment, you would:
    // 1. Use an email service like SendGrid, Mailgun, or AWS SES
    // 2. Or use a service like Formspree, EmailJS, or similar
    // 3. Or connect to your own email server
    
    // For now, we'll use mailto link approach or you can integrate with:
    // - SendGrid: https://sendgrid.com/
    // - Mailgun: https://www.mailgun.com/
    // - Resend: https://resend.com/
    // - Nodemailer with SMTP
    
    // Example with mailto (client-side would be better, but this is a server-side example):
    // You could also use a service like Formspree: https://formspree.io/
    
    // For production, replace this with actual email sending logic:
    console.log('Contact form submission:', {
      to: 'info@afsousa.org',
      subject: `Contact Form: ${subject}`,
      body: emailContent,
    })

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Your message has been sent successfully. We will get back to you soon.' 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}

