# EmailJS Setup Guide - FREE Email Integration

This guide will help you set up EmailJS to receive emails from your portfolio contact form directly to your Gmail account. **This service is completely FREE** (200 emails/month).

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (top right corner)
3. Sign up using your Google account or email

## Step 2: Add Email Service (Connect Your Gmail)

1. After logging in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Select **"Gmail"** from the list
4. Click **"Connect Account"**
5. Sign in with your Gmail account (the one where you want to receive messages)
6. Grant permissions to EmailJS
7. Give your service a name (e.g., "Portfolio Contact")
8. **Copy the Service ID** (looks like: `service_xxxxxxx`) - you'll need this!
9. Click **"Create Service"**

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Replace the default template content with this:

**Subject:**
```
New Portfolio Contact: {{subject}}
```

**Content:**
```
You have received a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Copy the Template ID** (looks like: `template_xxxxxxx`) - you'll need this!
5. Click **"Save"**

## Step 4: Get Your Public Key

1. Go to **"Account"** in the left sidebar
2. Find the **"API Keys"** section
3. **Copy your Public Key** (looks like: `xxxxxxxxxxxx`)

## Step 5: Update Your Code

Open `script.js` and replace these three values:

```javascript
// Line ~375 - Replace YOUR_PUBLIC_KEY
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY", // Paste your Public Key here
});

// Line ~455 - Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send(
    'YOUR_SERVICE_ID',  // Paste your Service ID here
    'YOUR_TEMPLATE_ID', // Paste your Template ID here
    {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_name: 'Prarthna Sharma',
    }
)
```

### Example (with actual values):
```javascript
emailjs.init({
    publicKey: "aBcDeFgHiJkLmN", // Your actual public key
});

emailjs.send(
    'service_abc1234',  // Your actual service ID
    'template_xyz5678', // Your actual template ID
    { ... }
)
```

## Step 6: Test Your Form

1. Open your portfolio website in a browser
2. Fill out the contact form
3. Click "Send Message"
4. Check your Gmail inbox - you should receive the message!

## Important Notes

✅ **FREE Tier Limits:**
- 200 emails per month
- No credit card required
- Perfect for portfolio websites

✅ **Security:**
- Your Gmail password is NOT shared with EmailJS
- EmailJS uses OAuth authentication
- Safe to use your personal Gmail

✅ **Spam Protection:**
- Add reCAPTCHA if you get spam (optional)
- EmailJS dashboard lets you monitor all emails

## Troubleshooting

**Problem: Emails not sending**
- Check browser console for errors
- Verify all three keys (Public Key, Service ID, Template ID) are correct
- Make sure you connected your Gmail account properly

**Problem: "Failed to send email" error**
- Check if you exceeded 200 emails/month limit
- Verify your EmailJS account is active
- Check your internet connection

**Problem: Emails going to spam**
- Add your own domain email in EmailJS settings
- Verify sender email in EmailJS dashboard

## Alternative FREE Solutions

If you want to explore other options:

1. **Formspree** (50 submissions/month free)
2. **Web3Forms** (250 submissions/month free)
3. **Getform** (50 submissions/month free)

---

**Need Help?**
- EmailJS Documentation: https://www.emailjs.com/docs/
- Video Tutorial: Search "EmailJS tutorial" on YouTube

Your contact form is now ready to receive emails! 🎉
