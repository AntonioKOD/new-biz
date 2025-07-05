# Warm Minimalism - Professional Website Builder

A modern, minimalist website builder with integrated Stripe payments for professional web design services.

## Features

- 🎨 Modern, responsive design
- 💳 Integrated Stripe checkout
- 📧 Email notifications via Resend
- ⚡ Next.js 15 with React 19
- 🎯 TypeScript support
- 🎪 Framer Motion animations

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Email Configuration (Resend)
RESEND_API_KEY=re_your_resend_api_key_here

# Application Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up your environment variables
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Stripe Integration

The application includes a fully functional Stripe checkout integration:

- Monthly subscription billing ($40/month)
- Secure payment processing
- Automatic email notifications
- Success page redirect
- Error handling and loading states

## Deployment

The application is ready for deployment on Vercel, Netlify, or any other Next.js-compatible hosting platform.

Make sure to set up your environment variables in your hosting platform's dashboard.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# new-biz
