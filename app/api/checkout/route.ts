import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

const stripe = process.env.STRIPE_SECRET_KEY 
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

const resend = new Resend(process.env.RESEND_API_KEY || 're_DpMnPWGn_2GJUod6MkbpUDrJG7jtn5vUe');

export async function POST(request: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe is not configured' },
        { status: 500 }
      );
    }

    const { siteDescription, referenceUrl } = await request.json();
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Custom Website - All Inclusive',
              description: `Site style: ${siteDescription}${referenceUrl ? ` | Reference: ${referenceUrl}` : ''}`,
            },
            unit_amount: 4000, // $40.00
            recurring: {
              interval: 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/pricing`,
      metadata: {
        siteDescription,
        referenceUrl: referenceUrl || '',
      },
      subscription_data: {
        metadata: {
          siteDescription,
          referenceUrl: referenceUrl || '',
        },
      },
    });

    // Send notification email to team
    try {
      const emailContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #E07A5F 0%, #D4A373 100%); padding: 30px; border-radius: 10px; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 24px; text-align: center;">🎉 New Subscription Started!</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #E07A5F; margin-top: 0; font-size: 20px;">Subscription Details</h2>
            <p style="margin: 10px 0; font-size: 16px;"><strong>Amount:</strong> $40/month</p>
            <p style="margin: 10px 0; font-size: 16px;"><strong>Session ID:</strong> ${session.id}</p>
            <p style="margin: 10px 0; font-size: 16px;"><strong>Site Description:</strong> ${siteDescription}</p>
            ${referenceUrl ? `<p style="margin: 10px 0; font-size: 16px;"><strong>Reference URL:</strong> ${referenceUrl}</p>` : ''}
          </div>

          <div style="background: #e8f4f8; padding: 20px; border-radius: 10px; text-align: center;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              Customer is being redirected to complete payment.
            </p>
          </div>
        </div>
      `;

      await resend.emails.send({
        from: 'BuildQuick Notifications <info@buildquick.io>',
        to: ['hello@buildquick.io'],
        subject: `New Subscription - $40/month`,
        html: emailContent,
      });
    } catch (emailError) {
      console.error('Failed to send notification email:', emailError);
      // Don't fail the checkout if email fails
    }

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
} 