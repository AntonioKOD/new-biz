import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, message, timeline, budget } = body;

    // Validate required fields
    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #E07A5F 0%, #D4A373 100%); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
          <h1 style="color: white; margin: 0; font-size: 24px; text-align: center;">New Contact Form Submission</h1>
        </div>
        
        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #E07A5F; margin-top: 0; font-size: 20px;">Contact Information</h2>
          <p style="margin: 10px 0; font-size: 16px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0; font-size: 16px;"><strong>Email:</strong> ${email}</p>
          ${company ? `<p style="margin: 10px 0; font-size: 16px;"><strong>Company:</strong> ${company}</p>` : ''}
        </div>

        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #E07A5F; margin-top: 0; font-size: 20px;">Project Details</h2>
          <p style="margin: 10px 0; font-size: 16px;"><strong>Project Type:</strong> ${projectType}</p>
          ${timeline ? `<p style="margin: 10px 0; font-size: 16px;"><strong>Timeline:</strong> ${timeline}</p>` : ''}
          ${budget ? `<p style="margin: 10px 0; font-size: 16px;"><strong>Budget:</strong> ${budget}</p>` : ''}
        </div>

        <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: #E07A5F; margin-top: 0; font-size: 20px;">Message</h2>
          <p style="margin: 10px 0; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        <div style="text-align: center; margin-top: 30px; padding: 20px; background: #e8f4f8; border-radius: 10px;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            This email was sent from the BuildQuick contact form.<br>
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      </div>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'BuildQuick Contact Form <info@buildquick.io>',
      to: ['hello@buildquick.io'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: emailContent,
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 