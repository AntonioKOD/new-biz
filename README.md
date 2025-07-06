# BuildQuick - Professional Website Design Service

A modern, responsive website for BuildQuick, a professional website design service that helps businesses create beautiful, functional websites. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

### Core Functionality
- **Website Information Form**: Comprehensive form to collect client requirements before checkout
- **Stripe Integration**: Secure payment processing with subscription management
- **Email Notifications**: Automated email notifications with project details
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Professional UI**: Modern, warm minimalist design with smooth animations

### Technical Features
- **Next.js 14**: Latest version with App Router
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Framer Motion**: Smooth animations and transitions
- **Stripe**: Payment processing and subscription management
- **Nodemailer**: Email sending functionality
- **Performance Optimized**: Lazy loading, image optimization, and mobile-first approach

### Accessibility & UX
- **WCAG Compliant**: Proper focus states, screen reader support, keyboard navigation
- **Error Handling**: Comprehensive error boundaries and user-friendly error messages
- **Loading States**: Professional loading screens and progress indicators
- **Form Validation**: Real-time validation with clear error messages
- **SEO Optimized**: Proper meta tags, semantic HTML, and sitemap

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Stripe account (for payment processing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/warm-minimalism.git
cd warm-minimalism
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# Email Configuration
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password

# Application URLs
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
warm-minimalism/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── checkout/      # Stripe checkout handling
│   │   └── contact/       # Contact form handling
│   ├── success/           # Success page after payment
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── AnimatedComponents.tsx
│   ├── Contact.tsx
│   ├── ErrorBoundary.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── HowItWorks.tsx
│   ├── Layout.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── Portfolio.tsx
│   ├── Pricing.tsx
│   ├── Services.tsx
│   └── WebsiteInfoForm.tsx
├── public/               # Static assets
├── docs/                # Documentation
└── scripts/             # Utility scripts
```

## 🎨 Design System

### Colors
- **Primary Orange**: `#E07A5F`
- **Primary Brown**: `#D4A373`
- **Text Dark**: `#111827`
- **Text Gray**: `#6B7280`
- **Background Light**: `#FAFAFA`

### Typography
- **Headings**: Poppins (Google Fonts)
- **Body Text**: Inter (Google Fonts)
- **Responsive scaling**: Mobile-first approach with breakpoints

### Components
- **Buttons**: Touch-friendly with 44px minimum height
- **Forms**: Comprehensive validation and error handling
- **Cards**: Consistent shadow and border radius system
- **Animations**: Performance-optimized with reduced motion support

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

All components are optimized for touch interaction and various screen sizes.

## 🔧 Configuration

### Stripe Setup
1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your API keys from the Stripe dashboard
3. Add the keys to your `.env.local` file
4. Configure your products and pricing in the Stripe dashboard

### Email Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an app password for the application
3. Add your email credentials to `.env.local`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- Digital Ocean
- AWS
- Google Cloud

## 📈 Performance

- **Core Web Vitals**: Optimized for excellent scores
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting and lazy loading
- **Caching**: Proper caching headers and strategies
- **Mobile Performance**: Reduced animations and optimized assets

## 🧪 Testing

Run the environment checker:
```bash
npm run check-env
```

This will verify all required environment variables are set correctly.

## 🔒 Security

- **HTTPS**: Enforced in production
- **Environment Variables**: Sensitive data stored securely
- **CSRF Protection**: Built-in Next.js protections
- **Input Validation**: Comprehensive form validation
- **Stripe Security**: PCI compliant payment processing

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or support:
- Email: hello@buildquick.io
- GitHub Issues: [Create an issue](https://github.com/yourusername/warm-minimalism/issues)

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Stripe** - Payment processing
- **Framer Motion** - Animation library
- **Vercel** - Deployment platform

---

Built with ❤️ by the BuildQuick team
