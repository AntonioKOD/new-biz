#!/usr/bin/env node

/**
 * Google Analytics Verification Script
 * 
 * This script helps verify that Google Analytics is properly configured
 * and tracking events on your website.
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Google Analytics Setup Verification\n');

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
const envExists = fs.existsSync(envPath);

if (!envExists) {
  console.log('❌ .env.local file not found');
  console.log('📝 Please create a .env.local file with the following content:');
  console.log('');
  console.log('NEXT_PUBLIC_GA_ID=G-083KY4M62N');
  console.log('NEXT_PUBLIC_SITE_URL=https://buildquick.io');
  console.log('');
  console.log('💡 Replace G-083KY4M62N with your actual Google Analytics ID');
} else {
  console.log('✅ .env.local file found');
  
  // Read and check the GA ID
  const envContent = fs.readFileSync(envPath, 'utf8');
  const gaIdMatch = envContent.match(/NEXT_PUBLIC_GA_ID=(.+)/);
  
  if (gaIdMatch) {
    const gaId = gaIdMatch[1].trim();
    console.log(`✅ Google Analytics ID found: ${gaId}`);
    
    if (gaId === 'G-083KY4M62N') {
      console.log('⚠️  Using default GA ID. Make sure this is your actual Google Analytics ID');
    }
  } else {
    console.log('❌ NEXT_PUBLIC_GA_ID not found in .env.local');
  }
}

console.log('\n📊 Analytics Features Enabled:');
console.log('✅ Page view tracking');
console.log('✅ Form submission tracking');
console.log('✅ Button click tracking');
console.log('✅ Scroll depth tracking (25%, 50%, 75%, 100%)');
console.log('✅ Time on page tracking');
console.log('✅ Custom event tracking');

console.log('\n🔧 To verify analytics is working:');
console.log('1. Open your website in a browser');
console.log('2. Open Developer Tools (F12)');
console.log('3. Go to Network tab');
console.log('4. Look for requests to google-analytics.com or googletagmanager.com');
console.log('5. Check your Google Analytics dashboard for real-time data');

console.log('\n📈 Expected Events:');
console.log('- page_view: When users visit pages');
console.log('- form_submit: When users submit forms');
console.log('- button_click: When users click buttons');
console.log('- scroll_depth: When users scroll to 25%, 50%, 75%, 100%');
console.log('- time_on_page: Every 30 seconds of page time');

console.log('\n🎯 To test tracking:');
console.log('1. Visit your website');
console.log('2. Scroll down the page');
console.log('3. Click on buttons/links');
console.log('4. Fill out and submit forms');
console.log('5. Check Google Analytics Real-Time reports');

console.log('\n📱 Mobile Testing:');
console.log('- Test on mobile devices');
console.log('- Verify touch events are tracked');
console.log('- Check mobile-specific user behavior');

console.log('\n🚀 Next Steps:');
console.log('1. Set up Google Analytics goals for conversions');
console.log('2. Create custom reports for form submissions');
console.log('3. Set up e-commerce tracking if needed');
console.log('4. Configure audience segments');
console.log('5. Set up automated reports');

console.log('\n✅ Analytics setup complete!'); 