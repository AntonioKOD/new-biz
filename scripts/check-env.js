#!/usr/bin/env node

// Simple script to check environment variables
console.log('🔍 Checking Environment Variables...\n');

const requiredVars = [
  'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY',
  'STRIPE_SECRET_KEY',
  'RESEND_API_KEY'
];

let allGood = true;

requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (!value) {
    console.log(`❌ ${varName}: NOT SET`);
    allGood = false;
  } else {
    // Check if Stripe keys are test mode
    if (varName.includes('STRIPE')) {
      if (value.startsWith('pk_test_') || value.startsWith('sk_test_')) {
        console.log(`✅ ${varName}: SET (Test Mode)`);
      } else if (value.startsWith('pk_live_') || value.startsWith('sk_live_')) {
        console.log(`⚠️  ${varName}: SET (LIVE MODE - This will cause errors!)`);
        allGood = false;
      } else {
        console.log(`❌ ${varName}: SET (Invalid format)`);
        allGood = false;
      }
    } else {
      console.log(`✅ ${varName}: SET`);
    }
  }
});

console.log('\n📋 Summary:');
if (allGood) {
  console.log('✅ All environment variables are properly configured for test mode!');
  console.log('\n🚀 You can now test the checkout flow.');
} else {
  console.log('❌ Some environment variables are missing or incorrectly configured.');
  console.log('\n📝 Please create a .env.local file with:');
  console.log('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_test_key_here');
  console.log('STRIPE_SECRET_KEY=sk_test_your_test_key_here');
  console.log('RESEND_API_KEY=your_resend_api_key_here');
} 