# Email Setup Instructions

Your contact form is now configured to send emails to `benrandoing20@gmail.com` using EmailJS. To complete the setup:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your Gmail account
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website contact form
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** (also called User ID)

## 5. Configure Environment Variables
Create a `.env` file in your project root with:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 6. Test the Setup
1. Restart your development server: `npm run dev`
2. Fill out and submit the contact form
3. Check your email inbox for the message

## Important Notes
- EmailJS free plan allows 500 emails per day
- Messages will be sent to: `benrandoing20@gmail.com`
- Form includes validation and user feedback
- Failed submissions will show an error message

## Troubleshooting
- Make sure environment variables are properly set
- Check browser console for any error messages
- Verify EmailJS service is properly connected to your Gmail
- Ensure template variables match the ones used in the code

